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
      {technicalDescription.length > 0 && (
        <>
          <h4>Tech description</h4>
          <p>{technicalDescription}</p>
        </>
      )}
      {technologies.length > 0 && (
        <>
          <h4>Tech, frameworks, IDE etc</h4>
          <ul>
            {technologies
              .sort((a, b) => (a > b ? 1 : -1))
              .map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
          </ul>
        </>
      )}
      {links.length > 0 && (
        <>
          <h4>Links</h4>
          {links.map((link) => (
            <a key={link.text} href={link.url}>
              {link.text}
            </a>
          ))}
        </>
      )}
    </div>
  )
}

export default ProjectView
