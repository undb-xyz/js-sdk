import { beforeAll, afterAll } from "bun:test";

if (!process.env.API_KEY) {
  throw new Error("Apikey cannot be empty!");
}
if (!process.env.TABLE_ID) {
  throw new Error("tableId cannot be empty!");
}
if (!process.env.RECORD_ID) {
  throw new Error("recordId cannot be empty!");
}
beforeAll(() => {
  // global setup
});

afterAll(() => {
  // global teardown
});
