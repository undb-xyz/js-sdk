import type { BaseClient } from '../base'
import { BaseAPI } from './base'
import { ICreateRecordDTO, ICreateRecordsDTO, IDeleteRecordsDTO, IUpdateRecordDTO, IUpdateRecordsDTO } from './types'

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

  createOne(dto: ICreateRecordDTO) {
    return this.client.request('post', `api/v1/openapi/tables/${this.tableId}/records`, { body: dto })
  }

  updateOne({ id, values }: IUpdateRecordDTO) {
    return this.client.request('patch', `api/v1/openapi/tables/${this.tableId}/records/${id}`, { body: { values } })
  }

  deleteOne(recordId: string) {
    return this.client.request('delete', `api/v1/openapi/tables/${this.tableId}/records/${recordId}`)
  }

  duplicateOne(recordId: string) {
    return this.client.request('post', `api/v1/openapi/tables/${this.tableId}/records/${recordId}`)
  }

  restoreOne(recordId: string) {
    return this.client.request('post', `api/v1/openapi/tables/${this.tableId}/records/${recordId}/restore`)
  }

  createMany(dto: ICreateRecordsDTO) {
    return this.client.request('post', `api/v1/openapi/tables/${this.tableId}/records/bulk`, { body: dto })
  }

  updateMany(dto: IUpdateRecordsDTO) {
    return this.client.request('patch', `api/v1/openapi/tables/${this.tableId}/records/bulk`, { body: dto })
  }

  deleteMany(dto: IDeleteRecordsDTO) {
    return this.client.request('delete', `api/v1/openapi/tables/${this.tableId}/records`, { body: dto })
  }

  duplidateMany(dto: IDeleteRecordsDTO) {
    return this.client.request('post', `api/v1/openapi/tables/${this.tableId}/records/duplicate/bulk`, { body: dto })
  }
}
