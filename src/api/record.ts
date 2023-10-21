import { BaseAPI } from './base'

export class RecordAPI extends BaseAPI {
  get(recordId: string) {
    return this.client.request('GET')
  }
}
