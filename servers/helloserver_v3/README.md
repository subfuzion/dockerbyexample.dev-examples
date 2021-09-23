v3 adds signal support for proper termination.

**Build an image**

docker run build -t hello .

**Run a container**

docker run --name helloctr -p 8080:8080 hello

**Test**

curl localhost:8080

**Remove the container**

docker rm -f helloctr
