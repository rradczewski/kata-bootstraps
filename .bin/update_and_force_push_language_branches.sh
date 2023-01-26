#!/bin/bash

set -euxo pipefail

PATH="$(dirname -- "$0")/node_modules/.bin/:${PATH}"
ROOT_DIR=$(readlink -f "$(dirname "$0")/../")

transform_devcontainer() {
    local DIR="$1"
    local DIRNAME=$(basename "$DIR")
    local CONFIG=$(devcontainer read-configuration --workspace-folder="$DIR")

    local FILE=$(echo "$CONFIG" | jq -r .configuration.configFilePath.path)

    local DOCKERFILE=$(echo "$CONFIG" | jq -r '.configuration.build.dockerfile // ""')

    if [ ! -z "$DOCKERFILE" ]; then
        local FILE_DIR=$(dirname "$FILE")
        DOCKERFILE=$(realpath --relative-to "$ROOT_DIR" "$FILE_DIR/$DOCKERFILE")
    fi

    mkdir -p "$ROOT_DIR/.devcontainer/$DIRNAME" || true

    jq \
        --arg dockerfile "$DOCKERFILE" \
        '(if($dockerfile | length != 0) then 
            .build.dockerfile = ("${localWorkspaceFolder}/" + $dockerfile)
         else
            . end) |
         .workspaceFolder = "/workspaces/kata-bootstraps/'${DIRNAME}'" |
         .workspaceMount = "type=bind,source=${localWorkspaceFolder}/'${DIRNAME}',target=/workspaces/kata-bootstraps/'${DIRNAME}'"
        ' \
        "$FILE" | tee "$ROOT_DIR/.devcontainer/$DIRNAME/devcontainer.json"
}

update_language_branch() {
    local DIR="$1"
    local DIRNAME=$(basename "$DIR")

    local SPLIT_REF=$(git subtree split --prefix "$DIRNAME/" "main")
    git push origin "${SPLIT_REF}:refs/heads/${DIRNAME}" --force
}

run() {
    for dir in $(ls -d $ROOT_DIR/*/); do
        update_language_branch "$dir"
    done
}

run
