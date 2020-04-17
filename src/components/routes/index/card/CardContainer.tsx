import React from 'react'
import { Tag, ProjectId } from '../../../../db/models'
import './card.scss'
import { Link } from 'react-router-dom'

export interface CardContainerProps {
  title: string
  tags: Tag[]
  image: string
  id: ProjectId
}

const CardContainer: React.FC<CardContainerProps> = ({
  title,
  tags,
  image,
  id,
}) => {
  return (
    <Link to={`/project/${id}`}>
      <div className="card">{title}</div>
    </Link>
  )
}

export default CardContainer
