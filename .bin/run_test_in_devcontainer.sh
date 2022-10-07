#!/bin/bash

set -xeuo pipefail

run() {
    local DIR="$1"

    local TEST_COMMAND=$(devcontainer read-configuration --log-level=trace --workspace-folder="$DIR" |
        jq -e -r '.configuration.customizations["github.com/rradczewski/kata-bootstraps"].failingTestVerification')
    devcontainer exec --log-level=trace --workspace-folder="$DIR" bash -c "${TEST_COMMAND}"
}

run "$1"
