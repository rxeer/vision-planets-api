import { config } from 'dotenv';
config();

import Koa from 'koa';
import * as cors from '@koa/cors';
import * as Router from '@koa/router';
import * as logger from 'koa-pino-logger';
import * as compress from 'koa-compress';
import { Notifier } from '@airbrake/node';
import * as koaBody from 'koa-body';
import * as koa404Handler from 'koa-404-handler';
import * as errorHandler from 'koa-better-error-handler';

import { initPlanetsRoutes } from './src/routes';

const startApp = (): void => {
  const app = new Koa();
  const router = new Router({
    prefix: '/api/v1',
  });

  app.context.onerror = errorHandler;

  app.use(cors());
  app.use(koaBody());
  app.use(logger());
  app.use(
    compress({
      filter(contentType) {
        return /text/i.test(contentType);
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

  app.listen(process.env.PORT || 3001);
};

const airbrake = new Notifier({
  projectId: Number(process.env.AIRBRAKE_PROJECT_ID),
  projectKey: process.env.AIRBRAKE_PROJECT_KEY,
  environment: 'production',
});

airbrake.call(startApp);
