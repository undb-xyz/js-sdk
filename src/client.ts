import { TableAPI } from './api/table'
import { BaseClient } from './base'

export class Client extends BaseClient {
  public table(tableId: string) {
    return new TableAPI(tableId, this)
  }
}
