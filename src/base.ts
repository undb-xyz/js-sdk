import { IUndbSDKConfig } from './config'

export abstract class BaseClient {
  private readonly url: string
  private readonly apiKey: string
  private readonly fetch: typeof fetch

  constructor(config: IUndbSDKConfig) {
    this.url = config.baseURL || 'http://localhost:3000'
    this.apiKey = config.apiKey
    this.fetch = config.fetch ?? require('isomorphic-fetch')
  }

  public request(method: string /** TODO: method types */) {
    return this.fetch(this.url, {
      method,
      headers: {
        'x-undb-api-token': this.apiKey,
      },
    })
  }
}
