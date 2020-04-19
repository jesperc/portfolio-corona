import React from 'react'
import './card-hover.scss'

export interface CardHoverProps {
  tags: string[]
}

const CardHoverContainer: React.FC<CardHoverProps> = ({ tags }) => {
  return (
    <div className="card-hover">
      <div className="card-hover-tags">
        {tags.map((tag) => (
          <span key={`card-hover-${tag}`} className="card-hover-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default CardHoverContainer
