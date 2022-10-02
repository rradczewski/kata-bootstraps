# Curated Kata Bootstrap Projects

This repository contains curated starter projects for running katas. All projects are kept up-to-date automatically by [renovate](https://github.com/renovatebot/) and are based on [devcontainers](https://code.visualstudio.com/docs/remote/containers).

## Using a bootstrap

Clone this repository and open the project you want to work in (e.g. `java_junit5`).

## Contributing a bootstrap

The general paradigm of this repository is to create a self-contained, minimal starter projects that are least likely to (silently) break in the future and can automatically be kept up-to-date.

Any bootstrap project may be added to this repository, if:

- The language is not yet present **or** the test-framework enables a different paradigm than the bootstraps already present for the language (e.g. a cucumber or mutation testing tool, not junit4)
- Dependencies and docker images are well-known and commonly used
  - Avoids using custom Dockerfile-based dev-containers
  - Uses only one testing framework and one assertion library
- A single failing test exists
- Version numbers are either `latest` or [renovate](https://github.com/renovatebot/) can pick them up automatically (e.g. don't use variables in `pom.xml` or elsewhere).

A bootstrap needs to contain a valid [`.devcontainer.json`](./java_junit5/.devcontainer.json) that configures a container with all appropriate tooling. Furthermore, the `postCreateCommand` needs to contain a shell command that, when executed, will verify that the test runner correctly runs and reports the single failure present.

## Other kata bootstraps

- [swkBerlin/kata-bootstraps](https://github.com/swkberlin/kata-bootstraps) - A huge collection of kata-bootstraps in plenty of languages with plenty of different frameworks
