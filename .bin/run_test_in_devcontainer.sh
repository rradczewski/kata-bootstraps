#!/bin/bash

set -xeuo pipefail

run() {
    local DIR="$1"

    devcontainer up --remove-existing-container --workspace-folder="$DIR"
    devcontainer run-user-commands --workspace-folder="$DIR"
}

run "$1"
