import React from 'react'
import TagSelector from '../tag-selector'
import Card from '../card'
import { TagId, Project, Tag } from '../../../../db/models'
import './gallery.scss'

export interface GalleryViewProps {
  projects: Project[]
  selectedTags: TagId[]
  onSelectTag: Function
  tags: Tag[]
}

const GalleryView: React.FC<GalleryViewProps> = ({
  selectedTags,
  onSelectTag,
  projects,
  tags,
}) => {
  return (
    <div className="gallery">
      <h3>Projects</h3>
      <TagSelector selected={selectedTags} onClick={onSelectTag} tags={tags} />
      <div className="cards">
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
    </div>
  )
}

export default GalleryView
