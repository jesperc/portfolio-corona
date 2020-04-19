import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'
import { resumeIcon, homeIcon } from '../../../resources/images'

export interface MenuContainerProps {}

const linkStyle = {
  color: 'inherit',
  textDecoration: 'inherit',
}

const RESUME_PATH = '/resume'
const HOME_PATH = '/'

const MenuContainer: React.FC<MenuContainerProps> = ({}) => {
  const [activePath, setActivePath] = useState('/')

  const renderListItem = (path: string, icon: string): JSX.Element => {
    return (
      <Link to={path} style={linkStyle} onClick={() => setActivePath(path)}>
        <li className={activePath === path ? 'menu-active' : ''}>
          <img src={icon} width="20px" height="20px" />
        </li>
      </Link>
    )
  }

  return (
    <ul className="menu">
      {renderListItem(HOME_PATH, homeIcon)}
      {renderListItem(RESUME_PATH, resumeIcon)}
    </ul>
  )
}

export default MenuContainer
