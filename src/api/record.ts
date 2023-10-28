import { HttpClient } from './http-client'
import { ICreateRecordDTO, ICreateRecordsDTO, IDeleteRecordsDTO, IUpdateRecordDTO, IUpdateRecordsDTO } from './types'

export class RecordAPI {
  constructor(private readonly tableId: string, private readonly httpClient: HttpClient) {}

  getOne(recordId: string) {
    return this.httpClient.request('get', `api/v1/openapi/tables/${this.tableId}/records/${recordId}`)
  }

  getMany() {
    return this.httpClient.request('get', `api/v1/openapi/tables/${this.tableId}/records`)
  }

  createOne(dto: ICreateRecordDTO) {
    return this.httpClient.request('post', `api/v1/openapi/tables/${this.tableId}/records`, { body: dto })
  }

  updateOne({ id, values }: IUpdateRecordDTO) {
    return this.httpClient.request('patch', `api/v1/openapi/tables/${this.tableId}/records/${id}`, { body: { values } })
  }

  deleteOne(recordId: string) {
    return this.httpClient.request('delete', `api/v1/openapi/tables/${this.tableId}/records/${recordId}`)
  }

  duplicateOne(recordId: string) {
    return this.httpClient.request('post', `api/v1/openapi/tables/${this.tableId}/records/${recordId}`)
  }

  restoreOne(recordId: string) {
    return this.httpClient.request('post', `api/v1/openapi/tables/${this.tableId}/records/${recordId}/restore`)
  }

  createMany(dto: ICreateRecordsDTO) {
    return this.httpClient.request('post', `api/v1/openapi/tables/${this.tableId}/records/bulk`, { body: dto })
  }

  updateMany(dto: IUpdateRecordsDTO) {
    return this.httpClient.request('patch', `api/v1/openapi/tables/${this.tableId}/records/bulk`, { body: dto })
  }

  deleteMany(dto: IDeleteRecordsDTO) {
    return this.httpClient.request('delete', `api/v1/openapi/tables/${this.tableId}/records`, { body: dto })
  }

  duplidateMany(dto: IDeleteRecordsDTO) {
    return this.httpClient.request('post', `api/v1/openapi/tables/${this.tableId}/records/duplicate/bulk`, {
      body: dto,
    })
  }
}
