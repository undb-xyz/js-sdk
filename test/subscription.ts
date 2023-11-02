import { Undb } from "../src/client";

const client = new Undb({
  apiKey: process.env.API_KEY ?? "",
});

const table = client.table(process.env.TABLE_ID ?? '');

await table.subscription.subscribe("record.created", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
