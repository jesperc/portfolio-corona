import React from 'react'
import { Project } from '../../../../db/models'
import './project.scss'
import TechnicalSheetIcon from '@material-ui/icons/Receipt'
import TechnologiesIcon from '@material-ui/icons/Reddit'
import ResourcesIcon from '@material-ui/icons/GitHub'
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'
import '../../../../style/image-gallery.css'

export interface ProjectViewProps {
  project: Project
}

const ProjectView: React.FC<ProjectViewProps> = ({ project }) => {
  const {
    title,
    duration,
    description,
    technicalDescription,
    technologies,
    links,
  } = project

  return (
    <div className="project">
      <h3>{`${title} (${duration})`}</h3>
      <p>{description}</p>
      <h4>
        <span className="icon">
          <TechnicalSheetIcon />
        </span>
        Technical Sheet
      </h4>
      <p>{technicalDescription}</p>
      <h4>
        <span className="icon">
          <TechnologiesIcon />
        </span>
        Technologies
      </h4>
      <p>
        {technologies.map((technology) => (
          <div>{technology}</div>
        ))}
      </p>
      <h4>
        <span className="icon">
          <ResourcesIcon />
        </span>
        Resources
      </h4>
      <p>
        {links.map((link) => (
          <a href={link.url}>{link.text}</a>
        ))}
      </p>
    </div>
  )
}

export default ProjectView
