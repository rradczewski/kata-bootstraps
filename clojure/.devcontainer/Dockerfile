FROM docker.io/eclipse-temurin:24.0.2_12-jdk

# Needed for lein
RUN apt-get update && apt-get install wget -y

ADD https://codeberg.org/leiningen/leiningen/raw/branch/stable/bin/lein /usr/local/bin/lein
RUN chmod 755 /usr/local/bin/lein

RUN useradd -rm -d /home/clojure -s /bin/bash -u 1001 clojure
USER clojure

WORKDIR /home/clojure

RUN /usr/local/bin/lein
