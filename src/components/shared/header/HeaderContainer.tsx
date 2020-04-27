import React from 'react'
import './header.scss'

import useMediaQuery from '@material-ui/core/useMediaQuery'

const HeaderContainer: React.FC = () => {
  return (
    <div className="header">
      <h1>Jesper Corell</h1>
      <h2>System Developer Portfolio</h2>
    </div>
  )
}

export default HeaderContainer
