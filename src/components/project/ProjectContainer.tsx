import React from 'react'
import { useParams } from 'react-router-dom'

export interface ProjectContainerProps {}

const ProjectContainer: React.FC<ProjectContainerProps> = ({}) => {
  const { id } = useParams()
  return <div>{`Project ${id}`}</div>
}

export default ProjectContainer
