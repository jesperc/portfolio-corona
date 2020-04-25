import React from 'react'
import { Project } from '../../../../db/models'
import './project.scss'
import Section from '../../../shared/section'

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
        <Section
          header="Tech description"
          paragraphs={[technicalDescription]}
        />
      )}
      {technologies.length > 0 && (
        <Section
          header="Tech stack"
          bulletList={technologies.sort((a, b) => (a > b ? 1 : -1))}
        />
      )}
      {links.length > 0 && <Section header="Links" links={links} />}
    </div>
  )
}

export default ProjectView
