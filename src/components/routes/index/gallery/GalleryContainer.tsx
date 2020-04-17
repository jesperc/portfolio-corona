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
    if (selectedTags.includes(type)) {
      setSelectedTags([...selectedTags].filter((tag) => tag !== type))
    } else {
      setSelectedTags([...selectedTags, type])
    }
  }

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  // get projects by selected tags
  const projects = useSelector(
    (state: RootState) => state.projects
  ).filter((project: Project) =>
    project.tags
      .map((tag: Tag) => tag.id)
      .some(
        (type: TagId) =>
          selectedTags.includes(type) || selectedTags.includes(TagId.showAll)
      )
  )

  return (
    <GalleryView
      selectedTags={selectedTags}
      onSelectTag={onSelectTag}
      projects={projects}
    />
  )
}

export default GalleryContainer
