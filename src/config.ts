export interface IUndbSDKConfig {
  /**
   * undb base url
   *
   * @default http://localhost:3000
   */
  baseURL?: string

  /**
   * undb api key
   *
   * @see {@link https://docs.undb.xyz/openapi/1tokens/}
   * @memberof UndbSDKConfig
   */
  apiKey: string

  /**
   * http header
   *
   * @example
   * {
   * 	"Content-Type": "application/json"
   * }
   */
  headers?: Record<string, string>

  /**
   * fetch
   */
  fetch?: typeof fetch
}
