#!/bin/bash

set -xeuo pipefail

run() {
    local DIR="$1"

    devcontainer up --log-level=trace --remove-existing-container --workspace-folder="$DIR"
    devcontainer run-user-commands --log-level=trace --workspace-folder="$DIR"
}

run "$1"
