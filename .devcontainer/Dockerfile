# renovate: datasource=docker depName=scala-docker-image-java-version packageName=docker.io/sbtscala/scala-sbt versioning=regex:^(?<major>\d+)(\.(?<minor>\d+))?(\.(?<patch>\d+))?(_(?<build>\d+))?$ extractVersion=^eclipse-temurin-(?<version>.+)_[^_]+_[^_]+$
ARG JAVA_VERSION=25.0.1_8
# renovate: datasource=docker depName=scala-docker-image-sbt-version packageName=docker.io/sbtscala/scala-sbt versioning=semver extractVersion=^eclipse-temurin-.+_(?<version>.+)_[^_]+$
ARG SBT_VERSION=1.12.0
# renovate: datasource=docker depName=scala-docker-image-scala-version packageName=docker.io/sbtscala/scala-sbt versioning=semver extractVersion=^eclipse-temurin-.+_[^_]+_(?<version>.+)$
ARG SCALA_VERSION=3.7.4
FROM docker.io/sbtscala/scala-sbt:eclipse-temurin-${JAVA_VERSION}_${SBT_VERSION}_${SCALA_VERSION}

RUN userdel ubuntu
RUN groupmod -g 1000 sbtuser
RUN usermod -u 1000 -g 1000 sbtuser
RUN find /home/sbtuser -uid 1001 -exec chown 1000:1000 {} \;

USER sbtuser

WORKDIR /home/sbtuser