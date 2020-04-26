import React, { useState, CSSProperties } from 'react'
import { Tag, ProjectId } from '../../../../db/models'
import './card.scss'
import { Link } from 'react-router-dom'
import CardHover from '../card-hover'

export interface CardContainerProps {
  title: string
  tags: Tag[]
  image: string
  id: ProjectId
  duration: string
}

const hiddenStyle: CSSProperties = {
  visibility: 'hidden',
}

const CardContainer: React.FC<CardContainerProps> = ({
  title,
  tags,
  image,
  id,
  duration,
}) => {
  const [hover, setHover] = useState(false)

  return (
    <div
      style={title?.length ? {} : hiddenStyle}
      className="card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && <CardHover tags={tags.map((tag) => tag.name)} />}
      <div className="title">
        <div className="text">{`${title} ${
          duration && duration.length > 0 ? `(${duration})` : ''
        }`}</div>
      </div>
      <Link to={`/project/${id}`}>
        <img alt="card" src={image} width="305px" height="199px" />
      </Link>
    </div>
  )
}

export default CardContainer
