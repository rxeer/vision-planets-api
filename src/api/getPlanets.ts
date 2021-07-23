import bridge from './bridge';
import { IPlanetsResponse, IPlanet } from '../interfaces';

interface IPlanetsData {
  list: IPlanet[];
  total: number;
}

export const getPlanets = async (): Promise<IPlanetsData> => {
  const data: IPlanetsResponse = await bridge.api.getContentList({
    referenceName: 'Planets',
    languageCode: 'en-us',
  });

  return {
    list: data.items,
    total: data.totalCount,
  };
};
