import React from 'react'
import TagSelector from '../tag-selector'
import Card from '../card'
import { TagId, Project, Tag } from '../../../../db/models'
import './gallery.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/reducers'

export interface GalleryViewProps {
  projects: Project[]
  selectedTags: TagId[]
  onSelectTag: Function
}

const GalleryView: React.FC<GalleryViewProps> = ({
  selectedTags,
  onSelectTag,
  projects,
}) => {
  return (
    <div className="gallery">
      <h3>Work</h3>
      <TagSelector selected={selectedTags} onClick={onSelectTag} />
      {projects.map((project: Project) => (
        <Card
          key={`card${project.id}`}
          title={project.title}
          tags={project.tags}
          image={project.thumbnail}
          id={project.id}
        />
      ))}
    </div>
  )
}

export default GalleryView
