import React, { useState, useEffect } from 'react'
import GalleryView from './GalleryView'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../../../redux/actions'
import { TagId, Tag, Project } from '../../../../db/models'
import { RootState } from '../../../../redux/reducers'

export interface GalleryContainerProps {}

const GalleryContainer: React.FC<GalleryContainerProps> = ({}) => {
  const [selectedTags, setSelectedTags] = useState([TagId.showAll] as TagId[])
  const dispatch = useDispatch()

  const onSelectTag = (type: TagId) => {
    let tags
    if (type === TagId.showAll) {
      tags = [TagId.showAll]
    } else if (selectedTags.includes(type)) {
      tags = [...selectedTags].filter((tag) => tag !== type)
    } else {
      tags = [...selectedTags, type].filter((tag) => tag !== TagId.showAll)
    }
    setSelectedTags(tags)
  }

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  // get projects by selected tags
  const projects = useSelector((state: RootState) => state.projects)
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
