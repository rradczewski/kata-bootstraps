# Curated Kata Bootstrap Projects

This repository contains curated starter projects for running katas. All projects are kept up-to-date automatically by [renovate](https://github.com/renovatebot/) and are based on [devcontainers](https://code.visualstudio.com/docs/remote/containers).

## Using a bootstrap

Clone this repository and open the project you want to work in (e.g. [`java_junit5/`](./java_junit5/)).

<a href="./java_junit5"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" /></a>
<a href="./kotlin_kotlintest"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" /></a>
<a href="./nodejs_jest"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /></a>
<a href="./python_pytest"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" /></a>
<a href="./ruby_rspec"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" /></a>
<a href="./rust"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" /></a>
<a href="./typescript_jest"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /></a>

If you're using [VisualStudio Code](https://code.visualstudio.com/), confirm launching the **Dev Container**. A fully set-up environment for the language you picked will be installed into a docker sandbox. 


## Contributing a bootstrap

The general paradigm of this repository is to create a self-contained, minimal starter projects that are least likely to (silently) break in the future and can automatically be kept up-to-date.

Any bootstrap project may be added to this repository, if:

- The language is not yet present **or** the test-framework enables a different paradigm than the bootstraps already present for the language (e.g. a cucumber or mutation testing tool, not junit4)
- Dependencies and docker images are well-known and commonly used
  - Avoids using custom Dockerfile-based dev-containers
  - Uses only one testing framework and one assertion library
- A single failing test exists
- Version numbers are either `latest` or [renovate](https://github.com/renovatebot/) can pick them up automatically (e.g. don't use variables in `pom.xml` or elsewhere).

A bootstrap needs to contain a valid [`.devcontainer.json`](./java_junit5/.devcontainer/devcontainer.json) that configures a container with all appropriate tooling. Furthermore, the `postCreateCommand` needs to contain a shell command that, when executed, will verify that the test runner correctly runs and reports the single failure present.

## Other kata bootstraps

- [swkBerlin/kata-bootstraps](https://github.com/swkberlin/kata-bootstraps) - A huge collection of kata-bootstraps in plenty of languages with plenty of different frameworks
