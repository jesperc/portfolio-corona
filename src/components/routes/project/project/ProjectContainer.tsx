import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/reducers'
import Spinner from '../../../shared/spinner'
import './project.scss'
import ProjectView from './ProjectView'

const ProjectContainer: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const params: any = useParams()
  const id = parseInt(params.id)

  const project = useSelector((state: RootState) => state.projects).find(
    (project) => project.id === id
  )

  useEffect(() => {
    if (isNaN(id) && !error) {
      setError(true)
      return
    }

    if (!project && !error && !loading) {
      setLoading(true)
    } else if (project && loading) {
      setLoading(false)
    }
  }, [project, error, id, loading])

  if (error) {
    return (
      <div className="project">
        <h3>Couldn't find project :(</h3>
      </div>
    )
  }

  if (!project || loading) {
    return <Spinner />
  }

  return <ProjectView project={project} />
}

export default ProjectContainer
