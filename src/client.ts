import { HttpClient } from './api/http-client'
import { TableAPI } from './api/table'
import { IUndbSDKConfig } from './config'

export class Client {
  private readonly httpClient: HttpClient
  constructor(config: IUndbSDKConfig) {
    this.httpClient = new HttpClient(config)
  }

  public table(tableId: string) {
    return new TableAPI(tableId, this.httpClient)
  }
}
