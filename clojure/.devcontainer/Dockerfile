FROM docker.io/eclipse-temurin:21_35-jdk-jammy

ADD https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein /usr/local/bin/lein
RUN chmod 755 /usr/local/bin/lein

RUN useradd -rm -d /home/clojure -s /bin/bash -u 1001 clojure
USER clojure

WORKDIR /home/clojure

RUN /usr/local/bin/lein