#!/bin/bash

set -xeuo pipefail

run() {
    local DIR="$1"

    devcontainer run-user-commands --log-level=trace --workspace-folder="$DIR"

    local TEST_COMMAND=$(devcontainer read-configuration --log-level=trace --workspace-folder="$DIR" |
        jq -r '.configuration.customizations["github.com/rradczewski/kata-bootstraps"].failingTestVerification // empty')
    if [ ! -z "${TEST_COMMAND}" ]; then
        devcontainer exec --log-level=trace --workspace-folder="$DIR" bash -c "${TEST_COMMAND}"
    fi

    devcontainer exec --log-level=trace --workspace-folder="$DIR" bash -c 'echo $UID:$GID; whoami'
}

run "$1"
