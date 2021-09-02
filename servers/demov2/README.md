Simple Express app that responds with 'hello world' but only handles one route (/).

Build an image:

```text
docker build -t app .
```

Run a container:

```text
docker run -it --rm --name app -p 8080:8080 app
```


The server process run as PID 1 inside the container. Processes running as PID 1
is treated specially by Linux: it ignores any signal with the default action.
So, the process will not terminate on SIGINT or SIGTERM unless it is coded to do
so.

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
