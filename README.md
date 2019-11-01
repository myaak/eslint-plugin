# eslint-config-web-bee

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
    "vue-web-bee/base", // js only
    "vue-web-bee/vue", // or use vue
    "vue-web-bee/nuxt", // or use nuxt
],
```