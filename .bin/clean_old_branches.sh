#!/bin/bash

set -ux

BRANCHES=$(comm -13 <(ls -d */ | sed 's/.$//' | sort) <(git ls-remote --heads origin | awk '{ print substr($2, 12) }' | sort) |
    grep -v renovate |
    grep -vE '^fix/' |
    grep -vE '^stage/' |
    grep -v main |
    grep -v gh-pages)

set -e
for i in $BRANCHES; do
    git push origin ":refs/heads/$i"
done
