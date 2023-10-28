import { SubscriptionService } from "./subscription-service";

export class RecordSubscription {
  constructor(
    private readonly tableId: string,
    private readonly subscriptionService: SubscriptionService,
  ) {}

  subscribe() {
    return this.subscriptionService.subscribe(
      "",
      `/api/tables/${this.tableId}/subscription`,
      (data) => {
        console.log("wtf");
      },
    );
  }
}
