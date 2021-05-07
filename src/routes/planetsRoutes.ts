import { generateError } from '../utils';
import { getPlanets, getPlanetById } from '../api';

export const initPlanetsRoutes = (router: any): void => {
  router
    .get('/planets', async (ctx) => {
      const { list, total } = await getPlanets();
      ctx.body = { list, total };
    })
    .get('/planets/:planetId', async (ctx) => {
      const planetId = ctx.params?.planetId;

      if (planetId) {
        try {
          const planet = await getPlanetById(planetId);
          ctx.body = planet;
        } catch (error) {
          ctx.body = generateError(404, 'Incorect planet ID');
        }
      } else {
        ctx.body = generateError(404, 'Incorect planet ID');
      }
    });
};
