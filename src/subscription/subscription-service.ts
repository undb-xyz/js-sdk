import { ISubscribeCallback } from "../api/types";
import { getBaseUrl } from "../api/utils";
import { IUndbSDKConfig } from "../config";
import EventSource from "eventsource";

export class SubscriptionService {
  private eventSource?: EventSource;

  constructor(private readonly config: IUndbSDKConfig) {}

  async subscribe(
    matchEvent: (data: any) => boolean,
    url: string,
    callback: ISubscribeCallback,
  ) {
    if (!this.isConnected) {
      this.connect(url);
    }

    const eventSource = this.eventSource!;

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (matchEvent(data)) {
        callback(null, data);
      }
    };

    eventSource.onerror = (event) => {
      callback(event, null);
    };
  }

  get isConnected() {
    return !!this.eventSource;
  }

  connect(url: string) {
    const baseURL = getBaseUrl(this.config);
    const r = `${baseURL}${url}`;
    this.eventSource = new EventSource(r, {
      headers: {
        "x-undb-api-token": this.config.apiKey,
      },
    });
  }
}
