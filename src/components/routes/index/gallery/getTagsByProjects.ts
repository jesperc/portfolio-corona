import { ProjectType, Tag, Project } from '../../../../db/models'

const getTagsByProjects = (projects: Project[], type: ProjectType): Tag[] => {
  return [
    ...new Set(
      projects
        .filter((project) => project.type === type)
        .flatMap((project) => project.tags)
    ),
  ].sort((a: Tag, b: Tag) => (a.sortOrder > b.sortOrder ? 1 : -1))
}

export default getTagsByProjects
