import { beforeAll, describe, it } from "bun:test";
import { Undb } from "../src";
import { TableAPI } from "../src/api/table";

describe("table", () => {
<<<<<<< Updated upstream
  let client: Client;
=======
  let undb: Undb;
  let table: TableAPI;
>>>>>>> Stashed changes

  beforeAll(() => {
    undb = new Undb({
      apiKey: "qGgIxkKuIAKFG6y1cbtaL1w88QyeAa7trpw_O2P9",
    });
<<<<<<< Updated upstream
=======
    table = undb.table("tblk4h9pgm7");
>>>>>>> Stashed changes
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
