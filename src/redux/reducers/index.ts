import { Tag, Project } from '../../db/models'
import { DATA_LOADED, SET_THEME } from '../constants/actionTypes'
import { StyleTheme } from '../../misc/enums'

export interface RootState {
  tags: Tag[]
  projects: Project[]
  theme: StyleTheme
}

const initialState: RootState = {
  tags: [],
  projects: [],
  theme: StyleTheme.light,
}

const rootReducer = (
  state: RootState = initialState,
  action: any
): RootState => {
  console.log(action.type)
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
