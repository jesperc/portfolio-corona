import { DATA_LOADED } from '../constants/actionTypes'
import { Data } from '../../db/models'
import getData from '../../db/getData'

export const fetchData = () => {
  return async (dispatch: any) => {
    let result: Data = { tags: [], projects: [] }
    try {
      result = await getData()
    } catch (exception) {
      console.error(exception.message)
    } finally {
      dispatch(dataLoaded(result))
    }
  }
}

export const dataLoaded = (db: Data) => {
  return {
    type: DATA_LOADED,
    payload: db,
  }
}
