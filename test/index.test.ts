import { beforeAll, describe, it } from 'bun:test'
import { Undb } from '../src'
import { TableAPI } from '../src/api/table'

describe('table', () => {
  let undb: Undb
  let table: TableAPI

  beforeAll(() => {
    undb = new Undb({
      apiKey: 'qGgIxkKuIAKFG6y1cbtaL1w88QyeAa7trpw_O2P9',
    })
    table = undb.table('tblk4h9pgm7')
  })

  describe('records api', () => {
    const recordId = 'rec78ri5r2y'

    it('get records', async () => {
      const results = await table.record.getMany()
      console.log(results)
    })

    it('get single record', async () => {
      const result = await table.record.getOne(recordId)
      console.log(result)
    })

    it('create record', async () => {
      const result = await table.record.createOne({
        values: { Item: 'hellofrombun' },
      })
      console.log(result)
    })

    it('duplcaite record', async () => {
      const result = await table.record.duplicateOne(recordId)
      console.log(result)
    })

    it('update record', async () => {
      const result = await table.record.updateOne({
        id: recordId,
        values: { Item: 'helloupdatedfrombun' },
      })
      console.log(result)
    })
  })

  describe('webhook api', () => {
    it('get webhooks', async () => {
      const results = await table.webhook.getMany()
      console.log(results)
    })
  })
})
