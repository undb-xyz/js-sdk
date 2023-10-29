import { Undb } from "../src/client";

const client = new Undb({
  apiKey: "qGgIxkKuIAKFG6y1cbtaL1w88QyeAa7trpw_O2P9",
});

const table = client.table("tblk4h9pgm7");

await table.subscription.subscribe("record.created", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
