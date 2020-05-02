import { Tag, Project } from '../../db/models'
import { DATA_LOADED, SET_THEME, SET_PATH } from '../constants/actionTypes'
import { StyleTheme, LocalStorageKeys, Path } from '../../misc/enums'
import { getItem } from '../../misc/localStorage'
import { DEFAULT_STYLE_THEME } from '../../misc/constants'

export interface RootState {
  tags: Tag[]
  projects: Project[]
  theme: StyleTheme
  path: Path
}

const getThemeFromLocalStorage = () => {
  const styleTheme = getItem(LocalStorageKeys.theme)

  return styleTheme !== StyleTheme.dark && styleTheme !== StyleTheme.light
    ? DEFAULT_STYLE_THEME
    : styleTheme
}

const getPath = (): Path => {
  const href = window.location.href
  return href.includes(Path.resume)
    ? Path.resume
    : href.includes(Path.hobby)
    ? Path.hobby
    : Path.home
}

const initialState: RootState = {
  tags: [],
  projects: [],
  theme: getThemeFromLocalStorage(),
  path: getPath(),
}

const rootReducer = (
  state: RootState = initialState,
  action: any
): RootState => {
  console.log(action.type)
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
  } else if (action.type === SET_PATH) {
    return {
      ...state,
      path: action.payload,
    }
  }
  return state
}

export default rootReducer
