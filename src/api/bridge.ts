const agility = require('@agility/content-fetch');

class BridgeApi {
  constructor() {
    this.applyBridge();
  }

  public api: any | null = null;

  public init() {
    const api = agility.getApi({
      guid: '2e777843-u',
      apiKey:
        'defaultlive.8ec008f2fa6c1648b7d5c928cb8845abe7a0d743ef127b7d78e7500ec9ed74a3',
    });

    this.api = api;
  }

  public applyBridge() {
    this.init();
  }
}

const instance: any = new BridgeApi();

export default instance;
