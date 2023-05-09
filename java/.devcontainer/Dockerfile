# renovate: datasource=github-releases depName=apache/maven versioning=semver
ARG MAVEN_VERSION=3.9.0

# renovate: datasource=java-version depName=java-jdk versioning=regex:(?<major>\d+)
ARG JAVA_VERSION=19
FROM docker.io/maven:$MAVEN_VERSION-eclipse-temurin-$JAVA_VERSION

RUN useradd -rm -d /home/java -s /bin/bash -u 1001 java
USER java

WORKDIR /home/java