import { beforeAll, describe, it } from 'bun:test'
import { Client } from '../src'
import { TableAPI } from '../src/api/table'

describe('should get table', () => {
  let api: Client

  beforeAll(() => {
    api = new Client({
      baseURL: 'http://0.0.0.0:3000',
      apiKey: 'qGgIxkKuIAKFG6y1cbtaL1w88QyeAa7trpw_O2P9',
    })
  })

  describe('records api', () => {
    let table: TableAPI

    beforeAll(() => {
      table = api.table('tblk4h9pgm7')
    })

    it('get records', async () => {
      const results = await table.record.getMany()
      console.log(results)
    })

    it('get single record', async () => {
      const result = await table.record.getOne('rec78ri5r2y')
      console.log(result)
    })

    it('create record', async () => {
      const result = await table.record.create({ values: { Item: 'hellofrombun' } })
      console.log(result)
    })

    it('duplcaite record', async () => {
      const result = await table.record.duplicateOne('rec78ri5r2y')
      console.log(result)
    })
  })
})
