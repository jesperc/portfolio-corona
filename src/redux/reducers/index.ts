import { Tag, Project } from '../../db/models'
import { DATA_LOADED, SET_THEME } from '../constants/actionTypes'
import { StyleTheme, LocalStorageKeys } from '../../misc/enums'
import { getItem } from '../../misc/localStorage'

export interface RootState {
  tags: Tag[]
  projects: Project[]
  theme: StyleTheme
}

const getThemeFromLocalStorage = () => {
  return getItem(LocalStorageKeys.theme) === StyleTheme.dark
    ? StyleTheme.dark
    : StyleTheme.light
}

const initialState: RootState = {
  tags: [],
  projects: [],
  theme: getThemeFromLocalStorage(),
}

const rootReducer = (
  state: RootState = initialState,
  action: any
): RootState => {
  if (action.type === DATA_LOADED) {
    const { tags, projects, hobbyProjects } = action.payload
    return {
      ...state,
      tags,
      projects,
      hobbyProjects,
    } as RootState
  } else if (action.type === SET_THEME) {
    return {
      ...state,
      theme: action.payload,
    }
  }
  return state
}

export default rootReducer
