import { HttpClient } from "./http-client";

export class WebhookAPI {
  constructor(
    private readonly tableId: string,
    private readonly httpClient: HttpClient,
  ) {}

  getMany() {
    return this.httpClient.request(
      "get",
      `api/v1/openapi/tables/${this.tableId}/webhooks`,
    );
  }
}
