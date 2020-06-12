# Orange Library

## Build module
Building this package will produce an `npm` module called `@orange/vue`.
``` sh
cd lib/
yarn build
```

## Preview module
First link your locally built module inside `lib` folder to your npm environment.
``` sh
cd lib/
yarn link
```

Then go to `example` folder and point to your local module.
``` sh
cd lib/example/
yarn
yarn link "@orange/vue"

yarn serve
```

## Publish module
``` sh
cd lib/
npm publish
```

---

# Storybook
Orange Vue documentation is based on [Storybook](https://storybook.js.org/) where you can get all informations about components and their props.

Most of our components have ability to be tried as Tryout / Live Example of applying different props.

## Development

### Setup

Git clone [Orange repository](https://github.com/orangeui/orange) and change directory to `storybook/vue` and run.

```
yarn install
```

### Development
For active Storybook development run.

```
yarn storybook
```

### Production
After we are done with it we will generate static files.

```
yarn build-storybook
```

### Unit tests
We need to run tests to check Storybook snapshots if anything changed. If we changed something we need to manually check it out. 
When we are sure that all is fine we will run the command below with `-u` to update them.

```
yarn test:unit
```

### Linting
Using linting to have consistent code styles.

```
yarn lint
```