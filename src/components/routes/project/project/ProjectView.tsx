import React from 'react'
import { Project } from '../../../../db/models'
import './project.scss'

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
      <h4>Tech Sheet</h4>
      <p>{technicalDescription}</p>
      <h4>Tech</h4>
      <ul>
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      <h4>Resources</h4>
      <p>
        {links.map((link) => (
          <a key={link.text} href={link.url}>
            {link.text}
          </a>
        ))}
      </p>
    </div>
  )
}

export default ProjectView
