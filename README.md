# Esbuild Playground

A playground environment to test esbuild documentation and configs.

While esbuild is super fast, it is best to stick with Vite, Turbopack, etc. until esbuild gets wider support from the community.

1 - Clone

`git clone ...`

2 - Install

`npm i ...`

3 - Play

```json

  "scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "bundle": "node esbuild/index.mjs & sass src/index.scss bundle/index.css",
  "build": "rm -rf bundle/\* && npm run bundle && cp -r public/index.html bundle/index.html",
  "watch": "node esbuild/server.mjs & nodemon -L -e tsx,css,html --ignore bundle/ --exec \"npm run build\""
  }

```
