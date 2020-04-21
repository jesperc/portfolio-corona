import React, { useState, CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'
import HomeIcon from '@material-ui/icons/Home'
import ResumeIcon from '@material-ui/icons/Assignment'

const linkStyle: CSSProperties = {
  color: 'inherit',
  textDecoration: 'inherit',
}

const RESUME_PATH = '/resume'
const HOME_PATH = '/'

const MenuContainer: React.FC = () => {
  const [activePath, setActivePath] = useState(
    window.location.href.includes(RESUME_PATH) ? RESUME_PATH : HOME_PATH
  )

  const renderListItem = (
    path: string,
    renderComponent: Function
  ): JSX.Element => {
    return (
      <Link to={path} style={linkStyle} onClick={() => setActivePath(path)}>
        <li className={activePath === path ? 'active' : ''}>
          {renderComponent()}
        </li>
      </Link>
    )
  }

  return (
    <ul className="menu">
      {renderListItem(HOME_PATH, () => (
        <HomeIcon />
      ))}
      {renderListItem(RESUME_PATH, () => (
        <ResumeIcon />
      ))}
    </ul>
  )
}

export default MenuContainer
