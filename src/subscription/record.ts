import type { ISubscribeCallback } from "../api/types";
import { SubscriptionService } from "./subscription-service";

export class RecordSubscription {
  constructor(
    private readonly tableId: string,
    private readonly subscriptionService: SubscriptionService,
  ) {}

  async subscribe(event: string, callback: ISubscribeCallback) {
    return this.subscriptionService.subscribe(
      (data) => {
        if (event.includes("*")) return true;

        return data.event.name === event;
      },
      `/api/v1/openapi/tables/${this.tableId}/subscription`,
      (error, data) => {
        callback(error, data);
      },
    );
  }
}
