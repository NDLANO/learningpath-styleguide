**_DEPRECATED_**

# Learningpath Styleguide
CSS for NDLA Learningpath

## This repository is deprecated
If you are looking for learningpath style, see [here](https://github.com/NDLANO/learningpath-frontend/tree/master/style).


## Installation

```
npm install --save ndla-learningpath-styleguide
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

### Run stylelint

Check for errors with stylelint.

```
$ npm run lint
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
