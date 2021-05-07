import * as agility from '@agility/content-fetch';

class BridgeApi {
  constructor() {
    this.applyBridge();
  }

  public api: any | null = null;

  public init() {
    const api = agility.getApi({
      guid: process.env.NODE_AGILITY_GUID,
      apiKey: process.env.NODE_AGILITY_API_KEY,
    });

    this.api = api;
  }

  public applyBridge() {
    this.init();
  }
}

const instance: any = new BridgeApi();

export default instance;
