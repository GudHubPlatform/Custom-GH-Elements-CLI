# GhElement CLI

**NB: This package need to be installed globally**

```shell
npm i @gudhub/gh-element-cli -g
```

## Development

After installing the package, go to empty folder, where you want to create new gh-element, and run:

```shell
create-gh-element
```

This will create template for developing of gh-element for you and install all dependencies.

Then you need only run:

```shell
npm run dev
```

This will start webpack bundling and start local server to serve builded files on **3000** port.

Now you can go to @gudhub/core and add new module to modules list.

Main JavaScript file will be located here:

*http://localhost:3000/main.js*

Main css file will be located here:

*http://localhost:3000/style.css*

## Production

To properly build your gh-element on production, you need to run:

```shell
npm run build
```