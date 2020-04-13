import React from 'react'
import CardContainer from './card/CardContainer'
import TagSelectorContainer from './tag-selector/TagSelectorContainer'

export interface GalleryContainerProps {}

const GalleryContainer: React.FC<GalleryContainerProps> = ({}) => {
  return (
    <div className="gallery">
      Gallery
      <TagSelectorContainer />
      <CardContainer />
      <CardContainer />
      <CardContainer />
    </div>
  )
}

export default GalleryContainer
