#!/bin/sh
while true; do
  curl -s -o /dev/null -w "%{http_code}\n" web:8080
  sleep 2
done
