# koa-common

  Aggregate middleware module for lazy people.

## Installation

```js
$ npm install koa-common
```

## Example

```js
var koa = require('koa');
var common = require('koa-common');

var app = koa();
app.use(common.logger());
```

## Middleware

  Includes the following common middleware:

  - [logger](https://github.com/koajs/logger)
  - [mount](https://github.com/koajs/mount)
  - [etag](https://github.com/koajs/etag)
  - [static](https://github.com/koajs/static)
  - [favicon](https://github.com/koajs/favicon)
  - [session](https://github.com/koajs/session)
  - [rewrite](https://github.com/koajs/rewrite)
  - [compress](https://github.com/koajs/compress)
  - [ratelimit](https://github.com/koajs/ratelimit)
  - [responseTime](https://github.com/koajs/response-time)
  - [conditionalGet](https://github.com/koajs/conditional-get)

## License

  MIT
