FROM debian:buster-slim
RUN apt -y update && apt -y install \
    curl \
    && apt clean && rm -rf /var/lib/apt/lists
COPY pinger.sh /bin/
RUN chmod +x /bin/pinger.sh
CMD ["/bin/pinger.sh"]
