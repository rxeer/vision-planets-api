require('dotenv').config();
const Koa = require('koa');
const koaBody = require('koa-body');
const Router = require('@koa/router');
const logger = require('koa-pino-logger');
const compress = require('koa-compress');
const koa404Handler = require('koa-404-handler');
const errorHandler = require('koa-better-error-handler');

import { initPlanetsRoutes } from './src/routes';

const app = new Koa();
const router = new Router({
  prefix: '/api/v1'
});

app.context.onerror = errorHandler;

app.use(koaBody());
app.use(logger());
app.use(
  compress({
    filter(content_type) {
      return /text/i.test(content_type);
    },
    threshold: 2048,
    gzip: {
      flush: require('zlib').constants.Z_SYNC_FLUSH,
    },
    deflate: {
      flush: require('zlib').constants.Z_SYNC_FLUSH,
    },
    br: false, // disable brotli
  })
);
app.use(koa404Handler);
app.use(router.routes()).use(router.allowedMethods());

initPlanetsRoutes(router);

app.listen(3001, () => {
  console.log('Lister on 3001');
});
