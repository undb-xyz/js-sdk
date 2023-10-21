import type { BaseClient } from '../base'
import { BaseAPI } from './base'

export class RecordAPI extends BaseAPI {
  constructor(private readonly tableId: string, client: BaseClient) {
    super(client)
  }

  getOne(recordId: string) {
    return this.client.request('GET', `/api/v1/openapi/tables/${this.tableId}/records/${recordId}`)
  }

  getMany() {
    return this.client.request('GET', `/api/v1/openapi/tables/${this.tableId}/records`)
  }
}
