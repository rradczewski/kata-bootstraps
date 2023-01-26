#!/bin/bash

set -euxo pipefail

PATH="$(dirname -- "$0")/node_modules/.bin/:${PATH}"
ROOT_DIR=$(readlink -f "$(dirname "$0")/../")

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
