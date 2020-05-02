import React, { useState, CSSProperties } from 'react'
import { Tag, ProjectId } from '../../../../db/models'
import './card.scss'
import { Link } from 'react-router-dom'
import CardHover from '../card-hover'
import { Path } from '../../../../misc/enums'
import { setPath } from '../../../../redux/actions'
import { useDispatch } from 'react-redux'

export interface CardContainerProps {
  title: string
  tags: Tag[]
  image: string
  id: ProjectId
  duration: string
  disabled: boolean
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
  disabled,
}) => {
  const [hover, setHover] = useState(false)
  const dispatch = useDispatch()

  return (
    <div
      style={title?.length ? {} : hiddenStyle}
      className="card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className="disabled">
        {hover && <CardHover tags={tags.map((tag) => tag.name)} />}
        <div className="title">
          <div className="text">{`${title} ${
            duration && duration.length > 0 ? `(${duration})` : ''
          }`}</div>
        </div>
        {!disabled && (
          <Link
            to={`/project/${id}`}
            onClick={() => dispatch(setPath(Path.project))}
          >
            <img className="image" alt="card" src={image} />
          </Link>
        )}
        {disabled && <img className="image" alt="card" src={image} />}
      </span>
    </div>
  )
}

export default CardContainer
