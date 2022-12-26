#!/bin/bash
set -x

PATH="$( dirname -- "$0" )/node_modules/.bin/:${PATH}"
ROOT_DIR=$(readlink -f "$(dirname "$0")/../")

readme_content() {
    for dir in $(ls -d $ROOT_DIR/*/);
    do
        echo Hi
    done
}

run() {
    readme_content | \
        perl \
            -0777 \
            -i \
            -pe \
            'my $str = do { local $/; <STDIN> }; s/<!--LANGUAGES_TABLE_START-->.+<!--LANGUAGES_TABLE_END-->/<!--LANGUAGES_TABLE_START-->\n$str\n<!--LANGUAGES_TABLE_END-->/igs' \
            "${ROOT_DIR}/README.md"
}

run