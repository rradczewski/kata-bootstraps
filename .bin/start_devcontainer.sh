#!/bin/bash

set -xeuo pipefail

run() {
    local DIR="$1"

    devcontainer up --log-level=trace --skip-post-create --remove-existing-container --workspace-folder="$DIR"
    devcontainer exec --log-level=trace --workspace-folder="$DIR" bash -c 'echo $UID:$GID; whoami'
}

run "$1"
