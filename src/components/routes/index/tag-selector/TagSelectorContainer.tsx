import React from 'react'
import { TagId, Tag } from '../../../../db/models'
import './tag-selector.scss'

export interface TagSelectorContainerProps {
  selected: TagId[]
  onClick: Function
  tags: Tag[]
}

const TagSelectorContainer: React.FC<TagSelectorContainerProps> = ({
  selected,
  onClick,
  tags,
}) => {
  return (
    <div className="tag-selector">
      {tags.map((tag: Tag) => (
        <div
          key={`tag${tag.id}`}
          className={`tag ${selected.includes(tag.id) ? 'selected' : ''}`}
          onClick={() => onClick(tag.id)}
        >
          {tag.name}
        </div>
      ))}
    </div>
  )
}

export default TagSelectorContainer
