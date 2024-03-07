# renovate: datasource=docker depName=scala-docker-image-java-version packageName=docker.io/sbtscala/scala-sbt versioning=regex:^(?<major>\d+)(\.(?<minor>\d+))?(\.(?<patch>\d+))?(_(?<build>\d+))?$ extractVersion=^eclipse-temurin-jammy-(?<version>.+)_[^_]+_[^_]+$
ARG JAVA_VERSION=21.0.2_13
# renovate: datasource=docker depName=scala-docker-image-sbt-version packageName=docker.io/sbtscala/scala-sbt versioning=semver extractVersion=^eclipse-temurin-jammy-.+_(?<version>.+)_[^_]+$
ARG SBT_VERSION=1.9.9
# renovate: datasource=docker depName=scala-docker-image-scala-version packageName=docker.io/sbtscala/scala-sbt versioning=semver extractVersion=^eclipse-temurin-jammy-.+_[^_]+_(?<version>.+)$
ARG SCALA_VERSION=3.4.0
FROM docker.io/sbtscala/scala-sbt:eclipse-temurin-jammy-${JAVA_VERSION}_${SBT_VERSION}_${SCALA_VERSION}

USER sbtuser

WORKDIR /home/sbtuser