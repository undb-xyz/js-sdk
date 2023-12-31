import ky, { type Options } from "ky";
import { IUndbSDKConfig } from "../config";
import { getBaseUrl } from "./utils";

export class HttpClient {
  private readonly ky: typeof ky;

  constructor(config: IUndbSDKConfig) {
    const baseURL = getBaseUrl(config);
    this.ky = ky.create({
      prefixUrl: baseURL,
      fetch: config.fetch ?? require("isomorphic-fetch"),
      headers: {
        "Content-Type": "application/json",
        "x-undb-api-token": config.apiKey,
      },
    });
  }

  public async request(
    method: Options["method"],
    endpoint: string,
    options?: { body: object },
  ) {
    return this.ky(endpoint, {
      method,
      body: options?.body ? JSON.stringify(options.body) : undefined,
    }).json();
  }
}
