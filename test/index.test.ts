import { describe, it } from 'bun:test'
import { Client } from '../src'

describe('should get table', () => {
  it('get records', async () => {
    const api = new Client({
      baseURL: 'http://0.0.0.0:3000',
      apiKey: 'qGgIxkKuIAKFG6y1cbtaL1w88QyeAa7trpw_O2P9',
    })

    const results = await api.table('tblk4h9pgm7').record.getMany()
    console.log(results)
  })
})
