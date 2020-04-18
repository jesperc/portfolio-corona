import React from 'react'
import './header.scss'

export interface HeaderContainerProps {}

const HeaderContainer: React.FC<HeaderContainerProps> = ({}) => {
  return (
    <div className="header">
      <h1>Jesper Corell</h1>
      <h2>System Developer Portfolio</h2>
    </div>
  )
}

export default HeaderContainer
