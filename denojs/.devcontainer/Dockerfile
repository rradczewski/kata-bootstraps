# renovate: datasource=docker depName=deno-docker-image packageName=docker.io/denoland/deno versioning=regex:^(?<compatibility>.+)-(?<major>\d+)(\.(?<minor>\d+))?(\.(?<patch>\d+))?$
ARG DENO_VERSION=ubuntu-2.0.6
FROM docker.io/denoland/deno:${DENO_VERSION}

RUN useradd -rm -d /home/denojs -s /bin/bash -u 1001 denojs
USER denojs

ENV DENO_DIR=/home/denojs/.deno

WORKDIR /home/denojs