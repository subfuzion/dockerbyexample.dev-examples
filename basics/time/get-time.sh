#!/bin/bash

# Ref: See section on Daytime Protocol
# https://www.nist.gov/pml/time-and-frequency-division/time-distribution/internet-time-service-its

# first arg is frequency, default is 5 seconds
freq=${1:-5}
echo "Fetch UTC(NIST) time every ${freq} seconds..."

while true; do
  if dt=$(cat </dev/tcp/time.nist.gov/13 | tail -n 1); then
    if [[ "$dt" =~ .*"UTC(NIST)".* ]]; then
      d=$(echo "$dt" | cut -d " " -f 2)
      t=$(echo "$dt" | cut -d " " -f 3)
      echo "$d $t"
    fi
  fi
  sleep "${freq}"
done
