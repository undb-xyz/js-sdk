import { ISubscribeCallback } from "../api/types";
import { getBaseUrl } from "../api/utils";
import { IUndbSDKConfig } from "../config";
import EventSource from "eventsource";

export class SubscriptionService {
  private eventSource?: EventSource;

  constructor(private readonly config: IUndbSDKConfig) {}

  async subscribe(event: string, url: string, callback: ISubscribeCallback) {
    if (!this.isConnected) {
      this.connect(url);
    }

    const eventSource = this.eventSource!;

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      callback(data);
    };
  }

  get isConnected() {
    return !!this.eventSource;
  }

  connect(url: string) {
    const baseURL = getBaseUrl(this.config);
    this.eventSource = new EventSource(`${baseURL}/${url}`, {
      headers: {
        "x-undb-api-token": this.config.apiKey,
      },
    });
  }
}
