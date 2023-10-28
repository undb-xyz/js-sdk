import { SubscriptionService } from "./subscription-service";

export class RecordSubscription {
  constructor(
    private readonly tableId: string,
    private readonly subscriptionService: SubscriptionService,
  ) {}

  async subscribe() {
    return this.subscriptionService.subscribe(
      "",
      `/api/v1/openapi/tables/${this.tableId}/subscription`,
      (data) => {
        console.log("wtf", data);
      },
    );
  }
}
