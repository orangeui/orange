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
