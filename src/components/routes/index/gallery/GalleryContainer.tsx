import React, { useState, useEffect } from 'react'
import GalleryView from './GalleryView'
import { useSelector } from 'react-redux'
import { TagId, Project, ProjectId, ProjectType } from '../../../../db/models'
import { RootState } from '../../../../redux/reducers'
import getProjectsBySelectedTags from './getProjectsBySelectedTags'
import getTagsByProjects from './getTagsByProjects'

export interface GalleryContainerProps {
  type: ProjectType
}

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
  type: ProjectType.work,
} as Project

const GalleryContainer: React.FC<GalleryContainerProps> = ({ type }) => {
  const [selectedTags, setSelectedTags] = useState([TagId.showAll] as TagId[])

  useEffect(() => {
    setSelectedTags([TagId.showAll])
  }, [type])

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

  const { projects, tags } = useSelector((state: RootState) => state)
  let filteredProjects: Project[] = getProjectsBySelectedTags(
    projects,
    selectedTags,
    type
  )

  const filteredTags = getTagsByProjects(projects, tags, type)

  // TODO: fix styling hack
  if (filteredProjects.length === 2 || filteredProjects.length === 5) {
    filteredProjects = [...filteredProjects, emptyProject]
  }

  return (
    <GalleryView
      selectedTags={selectedTags}
      onSelectTag={onSelectTag}
      projects={filteredProjects}
      tags={filteredTags}
      type={type}
    />
  )
}

export default GalleryContainer
