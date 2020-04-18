import React from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'
import { resumeIcon, homeIcon } from '../../../resources/images'

export interface MenuContainerProps {}

const linkStyle = {
  color: 'inherit',
  textDecoration: 'inherit',
}

const MenuContainer: React.FC<MenuContainerProps> = ({}) => {
  return (
    <ul className="menu">
      <li>
        <Link to={'/'} style={linkStyle}>
          <img src={homeIcon} width="20px" height="20px" />
        </Link>
      </li>
      <li>
        <Link to={'/resume'} style={linkStyle}>
          <img src={resumeIcon} width="20px" height="20px" />
        </Link>
      </li>
    </ul>
  )
}

export default MenuContainer
