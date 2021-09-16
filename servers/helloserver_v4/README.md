Demonstrate usage of `docker compose` with two services sharing a network.

The `tester` service simply calls the web service periodically, demonstrate
that it can invoke it by its DNS name `web`. 

```text
docker compose up
```

When finished, press `Ctrl-C`.

To tear everything down:

```text
docker compose rm -f
```
