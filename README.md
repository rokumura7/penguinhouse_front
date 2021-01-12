# penguinhouse_front

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/rokumura7/penguinhouse_front/ci)
![dependencies](https://david-dm.org/rokumura7/penguinhouse_front.svg)
![devDependencies](https://david-dm.org/rokumura7/penguinhouse_front/dev-status.svg)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Run Mock Server for front-dev.

```bash
$ npm run mock
```
Now you can get mock responces.

```bash
curl localhost:3001/api/v1/categories
[
  {
    "id": 1,
    "name": "Gourmet",
    "color": "#333"
  },
  {
    "id": 2,
    "name": "Programming",
    "color": "#ccc"
  }
]
```