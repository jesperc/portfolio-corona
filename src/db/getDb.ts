import seedDb from './seedDb'
import { Db } from './models'

const db = seedDb()

const getDb = (): Db => {
  return { ...db }
}

export default getDb
