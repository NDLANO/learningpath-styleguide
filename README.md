# Styleguide

css and stuff

## Installation

```
npm install --save ndla-styleguide
```

## Development scripts

### Dependencies

All dependencies are defined in `package.json` and are managed with npm. To
initially install all dependencies and when the list dependency has changed,
run `npm install`.

```
$ npm install
```

### Start development server

Start node server with hot reloading middleware listening on port 8081.

```
$ npm start
```

### Publish a new release

```
$ npm version patch
$ git push
$ git push --tags
$ npm publish
```

### Other scripts

```
# Build a new release:
$ npm run build
```

```
# Docker stuff
$ ./build.sh
$ ./release.sh
```
