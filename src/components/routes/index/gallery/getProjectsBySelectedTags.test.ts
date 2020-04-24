import getProjectsBySelectedTags from './getProjectsBySelectedTags'
import { Project, TagId, ProjectType } from '../../../../db/models'

describe('getProjectsBySelectedTags', () => {
  const type = ProjectType.work
  const projects = [
    {
      type,
      tags: [{ id: TagId.javaScript }],
    },
  ] as Project[]

  it('must return 1 project based on selected tag', () => {
    const result = getProjectsBySelectedTags(projects, [TagId.javaScript], type)
    expect(result.length).toBe(1)
  })

  it('must return 0 projects based on selected tag', () => {
    const result = getProjectsBySelectedTags(projects, [TagId.typeScript], type)
    expect(result.length).toBe(0)
  })

  it('must return 1 project based on selected tag ', () => {
    const result = getProjectsBySelectedTags(projects, [TagId.showAll], type)
    expect(result.length).toBe(1)
  })
})
