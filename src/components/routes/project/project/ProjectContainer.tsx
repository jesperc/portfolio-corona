import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/reducers'
import Spinner from '../../../shared/spinner'
import './project.scss'
import ProjectView from './ProjectView'

let interval: any
const TIMEOUT_IN_SECONDS = 3

const ProjectContainer: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const params: any = useParams()
  const id = parseInt(params.id)

  if (isNaN(id) && !error) {
    setError(true)
  }

  const project = useSelector((state: RootState) => state.projects).find(
    (project) => project.id === id
  )

  if (!project && !error && !loading) {
    setLoading(true)

    interval = setInterval(() => {
      setLoading(false)
      setError(true)
    }, TIMEOUT_IN_SECONDS * 1000)
  } else if (project && loading) {
    setLoading(false)
    clearInterval(interval)
  }

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
