import type { BaseClient } from '../base'

export abstract class BaseAPI {
  constructor(protected readonly client: BaseClient) {}
}
