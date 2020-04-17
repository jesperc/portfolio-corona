import React from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'
import { cvIcon, homeIcon } from '../../../resources/images'

export interface MenuContainerProps {}

const MenuContainer: React.FC<MenuContainerProps> = ({}) => {
  return (
    <ul className="menu">
      <li>
        <Link to={'/'}>
          <img src={homeIcon} />
        </Link>
      </li>
      <li>
        <Link to={'/resume'}>
          <img src={cvIcon} />
        </Link>
      </li>
    </ul>
  )
}

export default MenuContainer
