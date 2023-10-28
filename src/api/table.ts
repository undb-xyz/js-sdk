import { RecordSubscription } from '../subscription/record'
import type { SubscriptionService } from '../subscription/subscription-service'
import type { HttpClient } from './http-client'
import { RecordAPI } from './record'

export class TableAPI {
  public readonly record: RecordAPI
  public readonly subscription: RecordSubscription

  constructor(public readonly tableId: string, httpClient: HttpClient, subscriptionService: SubscriptionService) {
    this.record = new RecordAPI(tableId, httpClient)
    this.subscription = new RecordSubscription(tableId, subscriptionService)
  }
}
