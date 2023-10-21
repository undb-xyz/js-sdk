import type { BaseClient } from '../base'
import { BaseAPI } from './base'
import { RecordAPI } from './record'

export class TableAPI extends BaseAPI {
  public readonly record: RecordAPI

  constructor(public readonly tableId: string, client: BaseClient) {
    super(client)

    this.record = new RecordAPI(tableId, client)
  }
}
