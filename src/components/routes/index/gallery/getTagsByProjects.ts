import { ProjectType, Tag, Project } from '../../../../db/models'
const flatMap = require('array.prototype.flatmap')

const getTagsByProjects = (projects: Project[], type: ProjectType): Tag[] => {
  const filteredProjects = projects.filter((project) => project.type === type)
  return [
    ...new Set(
      flatMap(filteredProjects, (project: any) => project.tags) as Tag[]
    ),
  ].sort((a: Tag, b: Tag) => (a.sortOrder > b.sortOrder ? 1 : -1))
}

export default getTagsByProjects
