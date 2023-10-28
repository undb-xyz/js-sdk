import type { HttpClient } from './http-client'
import { RecordAPI } from './record'

export class TableAPI {
  public readonly record: RecordAPI

  constructor(public readonly tableId: string, httpClient: HttpClient) {
    this.record = new RecordAPI(tableId, httpClient)
  }
}
