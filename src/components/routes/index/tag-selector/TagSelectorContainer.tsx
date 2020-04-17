import React, { useState } from 'react'
import { TagId, Tag } from '../../../../db/models'
import { RootState } from '../../../../redux/reducers'
import { useSelector } from 'react-redux'
import './tag-selector.scss'

export interface TagSelectorContainerProps {
  selected: TagId[]
  onClick: Function
}

const TagSelectorContainer: React.FC<TagSelectorContainerProps> = ({
  selected,
  onClick,
}) => {
  const tags: Tag[] = useSelector(
    (state: RootState) => state.tags
  ).sort((a: Tag, b: Tag) => (a.sortOrder > b.sortOrder ? 1 : -1))

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
