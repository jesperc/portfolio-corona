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
}

const hiddenStyle: CSSProperties = {
  visibility: 'hidden',
}

const CardContainer: React.FC<CardContainerProps> = ({
  title,
  tags,
  image,
  id,
}) => {
  const [hover, setHover] = useState(false)

  return (
    <div
      style={title.length ? {} : hiddenStyle}
      className="card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && <CardHover tags={tags.map((tag) => tag.name)} />}
      <Link to={`/project/${id}`}>
        <img src={image} width="305px" height="199px" />
      </Link>
    </div>
  )
}

export default CardContainer
