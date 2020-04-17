import seedData from './seedData'
import { Data } from './models'

const data = seedData()

// TODO: fetch from backend
const getData = async (): Promise<Data> => {
  return { ...data }
}

export default getData
