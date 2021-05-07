import { getPlanets } from '../api';

export const initPlanetsRoutes = (router: any): void => {
  router.get('/planets', async (ctx) => {
    const { list, total } = await getPlanets();
    ctx.body = { list, total };
  });
};
