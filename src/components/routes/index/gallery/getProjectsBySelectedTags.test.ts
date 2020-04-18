import getProjectsBySelectedTags from './getProjectsBySelectedTags'
import { Project, TagId } from '../../../../db/models'

describe('getProjectsBySelectedTags', () => {
  const projects = [
    {
      tags: [{ id: TagId.javaScript }],
    },
  ] as Project[]

  it('must return 1 project based on selected tag', () => {
    const result = getProjectsBySelectedTags(projects, [TagId.javaScript])
    expect(result.length).toBe(1)
  })

  it('must return 0 projects based on selected tag', () => {
    const result = getProjectsBySelectedTags(projects, [TagId.typeScript])
    expect(result.length).toBe(0)
  })

  it('must return 1 project based on selected tag ', () => {
    const result = getProjectsBySelectedTags(projects, [TagId.showAll])
    expect(result.length).toBe(1)
  })
})
