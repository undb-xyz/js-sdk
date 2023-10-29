import { HttpClient } from "./api/http-client";
import { TableAPI } from "./api/table";
import { IUndbSDKConfig } from "./config";
import { SubscriptionService } from "./subscription/subscription-service";

export class Undb {
  private readonly httpClient: HttpClient;
  private readonly subscriptionService: SubscriptionService;

  constructor(config: IUndbSDKConfig) {
    this.httpClient = new HttpClient(config);
    this.subscriptionService = new SubscriptionService(config);
  }

  public table(tableId: string) {
    return new TableAPI(tableId, this.httpClient, this.subscriptionService);
  }
}
