#!/bin/bash

set -xeuo pipefail

PATH="$( dirname -- "$0" )/node_modules/.bin/:${PATH}"

run() {
    local DIR="$1"

    devcontainer up --log-level=trace --remove-existing-container --workspace-folder="$DIR"
    devcontainer exec --log-level=trace --workspace-folder="$DIR" bash -c 'echo $UID:$GID; whoami'
}

run "$1"
