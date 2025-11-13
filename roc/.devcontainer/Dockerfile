FROM mcr.microsoft.com/devcontainers/base:ubuntu
RUN mkdir -p /opt/roc
RUN curl \
    --retry 5 \
    --retry-all-errors \
    --fail \
    --silent \
    --show-error \
    --location \
    https://github.com/roc-lang/roc/releases/download/nightly/roc_nightly-linux_$(uname -p)-latest.tar.gz | \
    tar -xz --strip-components=1 -C /opt/roc

ENV PATH="/opt/roc:${PATH}"

RUN roc --version

