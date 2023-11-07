# Micro Frontend Demo with Piral
Micro frontend is a software development architectural approach where a single application is composed of multiple independently deployable frontends.

## Install piral
    npm i piral-cli -g

## Check verasion
    piral --version

## Setup a new piral instance
    piral new --target my-app

## Run the new piral instance
    piral debug

## Create the app shell
    piral build

  >By default, this command will create two folders within the dist folder: emulator and release. The latter contains the files for publishing the app shell to some host later on. The former contains an emulator package.

  >The emulator package is a tarball containing the application shell, in our case, it will be named `my-app-1.0.0.tgz`. Usually, the tarball will be published to a (private) npm registry, so that all development teams will be able to reference and use the same Piral instance for developing their pilets.

## Create a pilet
    pilet new ./my-app/dist/emulator/my-app-1.0.0.tgz --target my-pilet

  >The first parameter `./my-app/dist/emulator/my-app-1.0.0.tgz` specifies the __app shell__, which the pilet will be built for.

## Run pilet
    pilet debug

## Build pilet
    pilet build

## Pack pilet
    pilet pack

## Do all of the three above pilet commands (build, pack, publish) just use `--fresh`
    pilet publish --fresh --url sample

## Publish pilet to piral cloud
    pilet publish --fresh  --url https://feed.piral.cloud/api/v1/pilet/mx-demo --api-key <KEY>

## Publish pilet to local feed instance
    pilet publish --fresh  --url http://localhost:8181/api/v1/pilet --api-key df133a512569cbc85f69788d1b7ff5a909f6bcfe1c9a2794283a2fc35175882c
---
## Build a docker image
    docker build -t my-piral-app .

## Run the image
    docker run -p 3000:1234 my-piral-app

## Run using the docker compose file
    docker-compose up -d --build

## Stop running container
    docker-compose down
---
## Links
- [Getting Started](https://docs.piral.io/guidelines/tutorials/02-getting-started)
- [Publishing Pilets](https://docs.piral.io/guidelines/tutorials/03-publishing-pilets)
- [Error Codes](https://docs.piral.io/code/0000)