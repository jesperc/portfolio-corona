import { Tag, Project, TagId } from '../../../../db/models'

const getProjectsBySelectedTags = (
  projects: Project[],
  selectedTags: TagId[]
): Project[] => {
  return projects.filter((project: Project) =>
    project.tags
      .map((tag: Tag) => tag.id)
      .some(
        (type: TagId) =>
          selectedTags.includes(type) || selectedTags.includes(TagId.showAll)
      )
  )
}

export default getProjectsBySelectedTags
