#!/bin/bash

set -xeuo pipefail

run() {
    local DIR="$1"

    devcontainer up --remove-existing-container --workspace-folder="$DIR"
    devcontainer run-user-commands --workspace-folder="$DIR"
    local TESTCOMMAND=$(jq -r '.tasks[] | select(.label == "Validate Bootstrap") | .command' "$DIR/.vscode/tasks.json")
    devcontainer exec --workspace-folder="$DIR" bash -x -c "$TESTCOMMAND"
}

run "$1"
