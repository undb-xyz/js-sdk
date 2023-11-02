import { beforeAll, describe, it } from "bun:test";
import { Undb } from "../src";
import { TableAPI } from "../src/api/table";

describe("table", () => {
  let undb: Undb;
  let table: TableAPI;

  beforeAll(() => {
    undb = new Undb({
      apiKey: process.env.API_KEY!,
    });
    table = undb.table(process.env.TABLE_ID!);
  });

  describe("records api", () => {
    const recordId = process.env.RECORD_ID!;

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
