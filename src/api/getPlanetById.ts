import bridge from './bridge';
import { IPlanetByIdReponse, IPlanet } from '../interfaces';

export const getPlanetById = async (
  planetId: number
): Promise<IPlanetByIdReponse> => {
  const { fields, contentID }: IPlanet = await bridge.api.getContentItem({
    contentID: planetId,
    languageCode: 'en-us',
  });

  return {
    ...fields,
    id: contentID,
  };
};
