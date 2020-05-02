import { DATA_LOADED, SET_THEME, SET_PATH } from '../constants/actionTypes'
import { Data } from '../../db/models'
import getData from '../../db/getData'
import { StyleTheme, Path } from '../../misc/enums'

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

export const setTheme = (theme: StyleTheme) => {
  return {
    type: SET_THEME,
    payload: theme,
  }
}

export const setPath = (path: Path) => {
  return {
    type: SET_PATH,
    payload: path,
  }
}
