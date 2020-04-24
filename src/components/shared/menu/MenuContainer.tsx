import React, { useState, CSSProperties, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'
import HomeIcon from '@material-ui/icons/Home'
import ResumeIcon from '@material-ui/icons/AccountBox'
import HobbyIcon from '@material-ui/icons/GitHub'
import DarkModeIcon from '@material-ui/icons/Brightness3'
import LightModeIcon from '@material-ui/icons/WbSunny'
import { getItem, setItem } from '../../../misc/localStorage'
import { Path, StyleTheme, LocalStorageKeys } from '../../../misc/enums'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../../redux/actions'
import { RootState } from '../../../redux/reducers'

const linkStyle: CSSProperties = {
  color: 'inherit',
  textDecoration: 'inherit',
}

const MenuContainer: React.FC = () => {
  const href = window.location.href
  const [activePath, setActivePath] = useState(
    href.includes(Path.resume)
      ? Path.resume
      : href.includes(Path.hobby)
      ? Path.hobby
      : Path.home
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (getItem(LocalStorageKeys.theme) === StyleTheme.dark) {
      dispatch(setTheme(StyleTheme.dark))
    }
  }, [dispatch])

  const toggleDarkMode = () => {
    const theme: StyleTheme =
      getItem(LocalStorageKeys.theme) === StyleTheme.dark
        ? StyleTheme.light
        : StyleTheme.dark
    setItem(LocalStorageKeys.theme, theme)
    dispatch(setTheme(theme))
  }

  const theme: StyleTheme = useSelector((state: RootState) => state.theme)

  const renderListItem = (
    path: Path,
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
      {renderListItem(Path.home, () => (
        <HomeIcon className="icon" />
      ))}
      {renderListItem(Path.hobby, () => (
        <HobbyIcon className="icon" />
      ))}
      {renderListItem(Path.resume, () => (
        <ResumeIcon className="icon" />
      ))}
      <li className="last-item" onClick={() => toggleDarkMode()}>
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
