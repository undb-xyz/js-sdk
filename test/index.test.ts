import { beforeAll, describe, it } from "bun:test";
import { Client } from "../src";
import { TableAPI } from "../src/api/table";
import eventsource from "eventsource";

// @ts-ignore
global.EventSource = eventsource;

describe("table", () => {
  let client: Client;

  beforeAll(() => {
    client = new Client({
      baseURL: "http://0.0.0.0:3000",
      apiKey: "qGgIxkKuIAKFG6y1cbtaL1w88QyeAa7trpw_O2P9",
    });
  });

  describe("records api", () => {
    let table: TableAPI;
    const recordId = "rec78ri5r2y";

    beforeAll(() => {
      table = client.table("tblk4h9pgm7");
      table.subscription.subscribe();
    });

    it("get records", async () => {
      const results = await table.record.getMany();
      console.log(results);
    });

    it("get single record", async () => {
      const result = await table.record.getOne(recordId);
      console.log(result);
    });

    it("create record", async () => {
      const result = await table.record.createOne({
        values: { Item: "hellofrombun" },
      });
      console.log(result);
    });

    it("duplcaite record", async () => {
      const result = await table.record.duplicateOne(recordId);
      console.log(result);
    });

    it("update record", async () => {
      const result = await table.record.updateOne({
        id: recordId,
        values: { Item: "helloupdatedfrombun" },
      });
      console.log(result);
    });
  });
});
