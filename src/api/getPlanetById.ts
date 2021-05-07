import bridge from './bridge';
import { IPlanet } from '../interfaces';

export const getPlanetById = async (planetId: number): Promise<IPlanet> => {
  return await bridge.api.getContentItem({
    contentID: planetId,
    languageCode: 'en-us',
  });
};
