FROM docker.io/denoland/deno:ubuntu-1.36.4

RUN useradd -rm -d /home/denojs -s /bin/bash -u 1001 denojs
USER denojs

ENV DENO_DIR=/home/denojs/.deno

WORKDIR /home/denojs