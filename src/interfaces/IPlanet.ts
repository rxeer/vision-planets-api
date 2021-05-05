interface IPlanetProperties {
  state: number;
  versionID: number;
  modified: string;
  referenceName: string;
  definitionName: string;
}

interface IPlanetFields {
  name: string;
  mass: number;
  diameter: number;
  inclination: number;
  eccentricity: number;
  majorAxios: number;
  satellites: number;
  orbitalPeriod: number;
  surfaceGravity: number;
  siderealRotation: number;
}

export interface IPlanet {
  contentID: number;
  fields: IPlanetFields;
  properties: IPlanetProperties;
}

export interface IPlanetsResponse {
  items: IPlanet[];
  totalCount: number;
}
