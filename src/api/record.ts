import type { BaseClient } from '../base'
import { BaseAPI } from './base'
import { ICreateRecordDTO } from './types'

export class RecordAPI extends BaseAPI {
  constructor(private readonly tableId: string, client: BaseClient) {
    super(client)
  }

  getOne(recordId: string) {
    return this.client.request('get', `api/v1/openapi/tables/${this.tableId}/records/${recordId}`)
  }

  getMany() {
    return this.client.request('get', `api/v1/openapi/tables/${this.tableId}/records`)
  }

  create(dto: ICreateRecordDTO) {
    return this.client.request('post', `api/v1/openapi/tables/${this.tableId}/records`, { body: dto })
  }

  deleteOne(recordId: string) {
    return this.client.request('delete', `api/v1/openapi/tables/${this.tableId}/records/${recordId}`)
  }
}
