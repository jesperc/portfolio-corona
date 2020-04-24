import { ProjectType, Tag, Project, TagId } from '../../../../db/models'

const getTagsByProjects = (
  projects: Project[],
  tags: Tag[],
  type: ProjectType
): Tag[] => {
  return tags
    .sort((a: Tag, b: Tag) => (a.sortOrder > b.sortOrder ? 1 : -1))
    .filter(
      (tag) =>
        projects
          .filter((project) => project.type === type)
          .flatMap((project) => project.tags)
          .includes(tag) || tag.id === TagId.showAll
    )
}

export default getTagsByProjects
