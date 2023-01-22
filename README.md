# Curated Kata Bootstrap Projects

This repository contains curated starter projects for running katas. All projects are kept up-to-date automatically by [renovate](https://github.com/renovatebot/) and are based on [devcontainers](https://code.visualstudio.com/docs/remote/containers).

|   |   |   |
|---|---|---|
| <a alt="Dotnet" href="./dotnet_xunit"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" /></a> | Dotnet | [Open in Codespace](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=rradczewski%2Fkata-bootstraps&devcontainer_path=.devcontainer%2Fdotnet_xunit%2Fdevcontainer.json)
| <a alt="Elixir" href="./elixir"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg" /></a> | Elixir | [Open in Codespace](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=rradczewski%2Fkata-bootstraps&devcontainer_path=.devcontainer%2Felixir%2Fdevcontainer.json)
| <a alt="Go" href="./golang"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" /></a> | Go | [Open in Codespace](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=rradczewski%2Fkata-bootstraps&devcontainer_path=.devcontainer%2Fgolang%2Fdevcontainer.json)
| <a alt="Java" href="./java_junit5"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" /></a> | Java | [Open in Codespace](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=rradczewski%2Fkata-bootstraps&devcontainer_path=.devcontainer%2Fjava_junit5%2Fdevcontainer.json)
| <a alt="Java" href="./kotlin_kotlintest"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" /></a> | Java | [Open in Codespace](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=rradczewski%2Fkata-bootstraps&devcontainer_path=.devcontainer%2Fkotlin_kotlintest%2Fdevcontainer.json)
| <a alt="NodeJS" href="./nodejs_jest"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /></a> | NodeJS | [Open in Codespace](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=rradczewski%2Fkata-bootstraps&devcontainer_path=.devcontainer%2Fnodejs_jest%2Fdevcontainer.json)
| <a alt="Python3" href="./python_pytest"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" /></a> | Python3 | [Open in Codespace](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=rradczewski%2Fkata-bootstraps&devcontainer_path=.devcontainer%2Fpython_pytest%2Fdevcontainer.json)
| <a alt="Ruby" href="./ruby_rspec"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" /></a> | Ruby | [Open in Codespace](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=rradczewski%2Fkata-bootstraps&devcontainer_path=.devcontainer%2Fruby_rspec%2Fdevcontainer.json)
| <a alt="Rust" href="./rust"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" /></a> | Rust | [Open in Codespace](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=rradczewski%2Fkata-bootstraps&devcontainer_path=.devcontainer%2Frust%2Fdevcontainer.json)
| <a alt="NodeJS" href="./typescript_jest"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /></a> | NodeJS | [Open in Codespace](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=rradczewski%2Fkata-bootstraps&devcontainer_path=.devcontainer%2Ftypescript_jest%2Fdevcontainer.json)

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

