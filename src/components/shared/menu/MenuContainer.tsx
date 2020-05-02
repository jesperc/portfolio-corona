import React, { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'
import HomeIcon from '@material-ui/icons/Home'
import ResumeIcon from '@material-ui/icons/AccountBox'
import HobbyIcon from '@material-ui/icons/GitHub'
import DarkModeIcon from '@material-ui/icons/Brightness3'
import LightModeIcon from '@material-ui/icons/WbSunny'
import { setItem } from '../../../misc/localStorage'
import { Path, StyleTheme, LocalStorageKeys } from '../../../misc/enums'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme, setPath } from '../../../redux/actions'
import { RootState } from '../../../redux/reducers'

const linkStyle: CSSProperties = {
  color: 'inherit',
  textDecoration: 'inherit',
}

const MenuContainer: React.FC = () => {
  const { path, theme } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const toggleDarkMode = (theme: StyleTheme) => {
    const newTheme: StyleTheme =
      theme === StyleTheme.dark ? StyleTheme.light : StyleTheme.dark
    setItem(LocalStorageKeys.theme, newTheme)
    dispatch(setTheme(newTheme))
  }

  const renderListItem = (
    menuPath: Path,
    renderComponent: Function
  ): JSX.Element => {
    return (
      <Link
        to={menuPath}
        style={linkStyle}
        onClick={() => dispatch(setPath(menuPath))}
      >
        <li className={path === menuPath ? 'active' : ''}>
          {renderComponent()}
        </li>
      </Link>
    )
  }

  return (
    <ul className="menu">
      {renderListItem(Path.home, () => (
        <HomeIcon className="icon" />
      ))}
      {renderListItem(Path.hobby, () => (
        <HobbyIcon className="icon" />
      ))}
      {renderListItem(Path.resume, () => (
        <ResumeIcon className="icon" />
      ))}
      <li className="last-item" onClick={() => toggleDarkMode(theme)}>
        {theme === StyleTheme.dark ? (
          <LightModeIcon className="icon" />
        ) : (
          <DarkModeIcon className="icon" />
        )}
      </li>
    </ul>
  )
}

export default MenuContainer
