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
    techStack,
    links,
  } = project

  return (
    <div className="project">
      <h3>{`${title} ${duration.length ? `(${duration})` : ''}`}</h3>
      {description && description.length > 0 && (
        <Section header="Project description" paragraphs={[description]} />
      )}
      {technicalDescription && technicalDescription.length > 0 && (
        <Section header="Tech summary" paragraphs={[technicalDescription]} />
      )}
      {techStack && techStack.length > 0 && (
        <Section
          header="Tech stack"
          list={techStack.sort((a, b) => (a > b ? 1 : -1))}
        />
      )}
      {links && links.length > 0 && <Section header="Links" links={links} />}
    </div>
  )
}

export default ProjectView
