FROM docker.io/eclipse-temurin:19.0.2_7-jdk-jammy

ADD https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein /usr/local/bin/lein
RUN chmod 755 /usr/local/bin/lein

RUN useradd -rm -d /home/java -s /bin/bash -u 1001 java
USER java

RUN /usr/local/bin/lein

WORKDIR /home/java