v5 demonstrates orchestrating two services with Docker Compose.

The `tester` service simply calls the web service periodically, demonstrate
that it can invoke it by its DNS name `web` (using the `overlay` network).

```text
docker compose up
```

When finished, press `Ctrl-C`.

To tear everything down:

```text
docker compose rm -f
```
