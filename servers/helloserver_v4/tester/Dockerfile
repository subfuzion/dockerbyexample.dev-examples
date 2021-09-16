FROM debian:buster-slim
RUN apt -y update && apt -y install \
    curl \
    && apt clean && rm -rf /var/lib/apt/lists
COPY tester.sh /bin/
RUN chmod +x /bin/tester.sh
CMD ["/bin/tester.sh"]
