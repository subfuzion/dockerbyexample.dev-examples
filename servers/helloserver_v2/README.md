v2 adds Docker support.

**Build an image**

docker run build -t hello .

**Run a container**

docker run --name helloctr -p 8080:8080 hello

**Test**

curl localhost:8080

**Remove the container**

docker rm -f helloctr

## Notes

The server process run as PID 1 inside the container. On your host system,
the `init` process is usually PID 1, and a process running as PID 1 is treated
specially by Linux: it ignores any termination signal to suppress the default
action. This means the process running as PID 1 in your container will not
terminate on SIGINT or SIGTERM unless it is coded to do so.

Since the current version of app doesn't handle termination signals, to stop the
container you can put the app in the background by pressing `Ctrl-p` `Ctrl-q` in
sequence, then tell Docker to remove the container:

```text
docker rm -f app
```

We need the `-f` option since the container hasn't exited when we attempt to
remove it.

If you forgot to use the `-it` option when you started the container, you won't
be able to put it in the background this way. In this case, open another
terminal and run the `docker rm` command.

> Using `Ctrl-p` as part of a sequence to put a container in the background has
the unfortunate consequence of not allowing you to use that for scrolling back
if you run a shell in a container. See [Override the detach sequence] to learn
how to override the default keys.
