import fetch from 'isomorphic-fetch'
import { IUndbSDKConfig } from './config'

export abstract class BaseClient {
  private readonly url: string
  private readonly apiKey: string

  constructor(config: IUndbSDKConfig) {
    this.url = config.baseURL || 'http://localhost:3000'
    this.apiKey = config.apiKey
  }

  public request(method: string /** TODO: method types */) {
    return fetch(this.url, {
      method,
      headers: {
        'x-undb-api-key': this.apiKey,
      },
    })
  }
}
