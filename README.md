# @web-bee-ru/eslint-plugin

## Install
``` bash
$ npm i --save-dev @web-bee-ru/eslint-plugin
```

### devDependencies
-   eslint
-   eslint-config-airbnb-base
-   eslint-import-resolver-nuxt
-   eslint-plugin-import
-   eslint-plugin-vue
-   babel-eslint

``` bash
# install devDependencies
$ npm i --save-dev eslint eslint-config-airbnb-base eslint-import-resolver-nuxt eslint-plugin-import eslint-plugin-vue babel-eslint
```

## Using
Available configs:
``` js
extends: [
    "plugin:@web-bee-ru/base", // js only
    "plugin:@web-bee-ru/vue", // or use vue
    "plugin:@web-bee-ru/nuxt", // or use nuxt
],
```