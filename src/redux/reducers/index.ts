import { Tag, Project } from '../../db/models'
import { DATA_LOADED, SET_THEME } from '../constants/actionTypes'
import { StyleTheme, LocalStorageKeys } from '../../misc/enums'
import { getItem } from '../../misc/localStorage'

export interface RootState {
  tags: Tag[]
  projects: Project[]
  hobbyProjects: Project[]
  theme: StyleTheme
}

const getThemeFromLocalStorage = () => {
  return getItem(LocalStorageKeys.theme) === StyleTheme.light
    ? StyleTheme.light
    : StyleTheme.dark
}

const initialState: RootState = {
  tags: [],
  projects: [],
  theme: getThemeFromLocalStorage(),
  hobbyProjects: [],
}

const rootReducer = (
  state: RootState = initialState,
  action: any
): RootState => {
  if (action.type === DATA_LOADED) {
    const { tags, projects } = action.payload
    return {
      ...state,
      tags,
      projects,
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
