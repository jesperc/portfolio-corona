import { Tag, Project } from '../../db/models'
import { DATA_LOADED } from '../constants/actionTypes'

export interface RootState {
  tags: Tag[]
  projects: Project[]
}

const initialState: RootState = {
  tags: [],
  projects: [],
}

const rootReducer = (
  state: RootState = initialState,
  action: any
): RootState => {
  if (action.type === DATA_LOADED) {
    const { tags, projects } = action.payload
    return {
      tags: [...tags],
      projects: [...projects],
    } as RootState
  }
  return state
}

export default rootReducer
