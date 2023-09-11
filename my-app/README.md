# Micro Frontend Demo with Piral
Micro frontend is a software development architectural approach where a single application is composed of multiple independently deployable frontends.

## To setup piral
- `npm i piral-cli -g`
- `piral --version`

## To setup a new Piral instance
- `piral new --target my-app`

## To run the new Piral instance
- `piral debug`

## To create the app shell
- `piral build`

  >By default, this command will create two folders within the dist folder: emulator and release. The latter contains the files for publishing the app shell to some host later on. The former contains an emulator package.

  >The emulator package is a tarball containing the application shell, in our case, it will be named `my-app-1.0.0.tgz`. Usually, the tarball will be published to a (private) npm registry, so that all development teams will be able to reference and use the same Piral instance for developing their pilets.

## To create a pilet
- `pilet new ./my-app/dist/emulator/my-app-1.0.0.tgz --target my-pilet`

  >The first parameter ./my-app/dist/emulator/my-app-1.0.0.tgz specifies the application shell, which the pilet will be built for.

## To run pilet
- `pilet debug`

## To build pilet
- `pilet build`

## To pack pilet
- `pilet pack`

## To do all of the three above pilet commands (build, pack, publish) just use `--fresh`
- `pilet publish --fresh --url sample`

## To publish pilet
- `pilet publish --url https://feed.piral.cloud/api/v1/pilet/mx-demo --api-key <KEY>`


---
## Links
- [Getting Started](https://docs.piral.io/guidelines/tutorials/02-getting-started)
- [Publishing Pilets](https://docs.piral.io/guidelines/tutorials/03-publishing-pilets)
- [Error Codes](https://docs.piral.io/code/0000)