# renovate: datasource=docker depName=scala-docker-image-java-version packageName=docker.io/sbtscala/scala-sbt versioning=regex:^eclipse-temurin-jammy-(?<major>\d+)(\.(?<minor>\d+))?(\.(?<patch>\d+))?(_(?<build>\d+))?(_(?<compatibility>.*))?$
ARG JAVA_VERSION=19.0.1_10
# renovate: datasource=github-releases depName=sbt/sbt packageName=sbt/sbt extractVersion=^v(?<version>\S+)
ARG SBT_VERSION=1.9.4
# renovate: datasource=maven depName=scala packageName=org.scala-lang:scala3-library_3 versioning=ivy
ARG SCALA_VERSION=3.3.0
FROM docker.io/sbtscala/scala-sbt:eclipse-temurin-jammy-${JAVA_VERSION}_${SBT_VERSION}_${SCALA_VERSION}