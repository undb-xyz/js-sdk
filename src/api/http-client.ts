import ky, { type Options } from 'ky'
import { IUndbSDKConfig } from '../config'
import { DEFAULT_URL } from '../constants'

export class HttpClient {
  private readonly ky: typeof ky

  constructor(config: IUndbSDKConfig) {
    this.ky = ky.create({
      prefixUrl: config.baseURL || DEFAULT_URL,
      fetch: config.fetch ?? require('isomorphic-fetch'),
      headers: {
        'Content-Type': 'application/json',
        'x-undb-api-token': config.apiKey,
      },
    })
  }

  public async request(method: Options['method'], endpoint: string, options?: { body: object }) {
    return this.ky(endpoint, {
      method,
      body: options?.body ? JSON.stringify(options.body) : undefined,
    }).json()
  }
}
