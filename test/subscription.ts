import { Client } from "../src/client";

const client = new Client({
  baseURL: "http://0.0.0.0:3000",
  apiKey: "qGgIxkKuIAKFG6y1cbtaL1w88QyeAa7trpw_O2P9",
});

const table = client.table("tblk4h9pgm7");

await table.subscription.subscribe();
