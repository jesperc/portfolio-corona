import React from 'react'
import TagSelector from '../tag-selector'
import Card from '../card'
import { TagId, Project, Tag, ProjectType } from '../../../../db/models'
import './gallery.scss'

export interface GalleryViewProps {
  projects: Project[]
  selectedTags: TagId[]
  onSelectTag: Function
  tags: Tag[]
  type: ProjectType
}

const GalleryView: React.FC<GalleryViewProps> = ({
  selectedTags,
  onSelectTag,
  projects,
  tags,
  type,
}) => {
  return (
    <div className="gallery">
      <h3>{type}</h3>
      <TagSelector selected={selectedTags} onClick={onSelectTag} tags={tags} />
      <div className="cards">
        {projects.map((project: Project) => (
          <Card
            key={`card${project.id}`}
            title={project.title}
            tags={project.tags}
            image={project.thumbnail}
            id={project.id}
            duration={project.duration}
          />
        ))}
      </div>
    </div>
  )
}

export default GalleryView
