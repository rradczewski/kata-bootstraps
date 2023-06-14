FROM curlimages/curl AS elm-compiler

# renovate: datasource=github-releases depName=elm/compiler versioning=semver
ENV ELM_COMPILER_VERSION=0.19.1

RUN curl --retry 5 --retry-all-errors --fail --silent --show-error --location \
    https://github.com/elm/compiler/releases/download/${ELM_COMPILER_VERSION}/binary-for-linux-64-bit.gz |\
      gunzip > /tmp/elm


FROM mcr.microsoft.com/devcontainers/javascript-node:20-bullseye

COPY --from=elm-compiler --chmod=755 /tmp/elm /usr/local/bin/elm