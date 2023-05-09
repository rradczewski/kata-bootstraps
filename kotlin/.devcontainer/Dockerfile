# renovate: datasource=java-version depName=java-jdk versioning=semver
ARG JAVA_VERSION=19.0.2_7
FROM docker.io/eclipse-temurin:$JAVA_VERSION-jdk

RUN useradd -rm -d /home/java -s /bin/bash -u 1001 java
USER java

WORKDIR /home/java