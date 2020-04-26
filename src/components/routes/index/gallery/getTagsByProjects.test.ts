import { Project, TagId, ProjectType, Tag } from '../../../../db/models'
import getTagsByProjects from './getTagsByProjects'

describe('getTagsByProjects', () => {
  const type = ProjectType.work
  const projects: Project[] = [
    {
      type,
      tags: [{ id: TagId.javaScript }, { id: TagId.android }],
    } as Project,
    {
      type,
      tags: [{ id: TagId.typeScript }],
    } as Project,
    {
      type: ProjectType.hobby,
      tags: [{ id: TagId.android }],
    } as Project,
  ]

  it('must return 3 tags based on projects', () => {
    const result = getTagsByProjects(projects, type)
    expect(result.length).toBe(3)
  })

  it('must return 1 tag based on projects', () => {
    const result = getTagsByProjects([projects[1]], type)
    expect(result.length).toBe(1)
  })

  it('must return 0 tags based on projects', () => {
    const result = getTagsByProjects([], type)
    expect(result.length).toBe(0)
  })
})
