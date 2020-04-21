import React, { useState } from 'react'
import GalleryView from './GalleryView'
import { useSelector } from 'react-redux'
import { TagId, Tag, Project, ProjectId } from '../../../../db/models'
import { RootState } from '../../../../redux/reducers'

const emptyProject = {
  id: ProjectId.hidden,
  title: '',
  description: '',
  technicalDescription: '',
  technologies: [],
  links: [],
  images: [],
  thumbnail: '',
  tags: [],
  duration: '',
  sortOrder: 100,
} as Project

const GalleryContainer: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState([TagId.showAll] as TagId[])

  const onSelectTag = (type: TagId) => {
    let tags = [...selectedTags]
    if (type === TagId.showAll) {
      tags = [TagId.showAll]
    } else if (type === TagId.typeScript && !selectedTags.includes(type)) {
      tags.push(type)
      if (!selectedTags.includes(TagId.javaScript)) {
        tags.push(TagId.javaScript)
      }
      tags = tags.filter((tag) => tag !== TagId.showAll)
    } else if (selectedTags.includes(type)) {
      tags = tags.filter((tag) => tag !== type)
    } else {
      tags = [...tags, type].filter((tag) => tag !== TagId.showAll)
    }
    setSelectedTags(tags)
  }

  // get projects by selected tags
  let projects = useSelector((state: RootState) => state.projects)
    .filter((project: Project) =>
      project.tags
        .map((tag: Tag) => tag.id)
        .some(
          (type: TagId) =>
            selectedTags.includes(type) || selectedTags.includes(TagId.showAll)
        )
    )
    .sort((a: Project, b: Project) => (a.sortOrder > b.sortOrder ? 1 : -1))

  // get and sort all tags based on sort order.
  const tags: Tag[] = useSelector(
    (state: RootState) => state.tags
  ).sort((a: Tag, b: Tag) => (a.sortOrder > b.sortOrder ? 1 : -1))

  if (projects.length === 2 || projects.length === 5) {
    // TODO: fix styling hack
    projects = [...projects, emptyProject]
  }

  return (
    <GalleryView
      selectedTags={selectedTags}
      onSelectTag={onSelectTag}
      projects={projects}
      tags={tags}
    />
  )
}

export default GalleryContainer
