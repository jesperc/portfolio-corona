import { Tag, Project, TagId, ProjectType } from '../../../../db/models'

const getProjectsBySelectedTags = (
  projects: Project[],
  selectedTags: TagId[],
  type: ProjectType
): Project[] => {
  return projects
    .filter(
      (project: Project) =>
        project.type === type &&
        project.tags
          .map((tag: Tag) => tag.id)
          .some(
            (type: TagId) =>
              selectedTags.includes(type) ||
              selectedTags.includes(TagId.showAll)
          )
    )
    .sort((a: Project, b: Project) => (a.sortOrder > b.sortOrder ? 1 : -1))
}

export default getProjectsBySelectedTags
