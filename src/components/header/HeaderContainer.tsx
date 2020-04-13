import React from 'react'
import MenuContainer from './menu/MenuContainer'
import getDb from '../../db/getDb'

export interface HeaderContainerProps {}

const HeaderContainer: React.FC<HeaderContainerProps> = ({}) => {
  const { name, title } = getDb()
  return (
    <div className="header">
      <h1>{name}</h1>
      <h2>{title}</h2>
      <MenuContainer />
    </div>
  )
}

export default HeaderContainer
