import { RecordAPI } from './api/record'
import { BaseClient } from './base'

export class Client extends BaseClient {
  public readonly record = new RecordAPI(this)
}
