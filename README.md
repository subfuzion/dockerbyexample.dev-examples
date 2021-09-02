[cheatsheet](cheatsheet.md)

# Demo 1 

Run a bash shell in a container and attach a terminal to run
commands interactively
  
    docker run -it --rm --name demo debian bash

Note that this is a normal Linux environment in the container

Try to use a tool, like `git` or `curl`
* Not installed in this container, so try
  * `apt update -y && apt install -y git curl`

Copy the app into the container. From another terminal:

    docker cp $PWD/app demo:/

Build it
  * Need to install Node.js and npm
  * Save time and switch to a base image that already has them

    docker -it --rm --name demo node bash
  
Detach and reattach to the container
  * Ctrl-p, Ctrl-q
  * docker attach

Save the container to an image
  * docker commit

Create a new container from the image

# Demo 2.1

[helloworld](./basics/helloworld/)

# Demo 2.2

[time](./basics/time/)

* Discuss difference between CMD and ENTRYPOINT
* Review [cheatsheet](cheatsheet.md) using this example

Using CMD

    docker build -f Dockerfile.using_cmd -t get-time .

Using ENTRYPOINT

    docker build -f Dockerfile.using_entrypoint -t get-time . 

# Demo 3

Introduce docker compose

# Demo 4

More complicated compose with replicas

# Demo 5

https://github.com/subfuzion/voting-app
http://bit.ly/voting-app-with-docker

# Demo 6

https://hub.docker.com/_/dart
https://github.com/GoogleCloudPlatform/functions-framework-dart
