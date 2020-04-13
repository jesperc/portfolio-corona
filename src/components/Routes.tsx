import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HeaderContainer from './header/HeaderContainer'
import GalleryContainer from './gallery/GalleryContainer'
import FooterContainer from './footer/FooterContainer'
import ProjectContainer from './project/ProjectContainer'

const Routes = () => {
  return (
    <Router>
      <div className="app">
        <HeaderContainer />
        <Switch>
          <Route path="/project/:id">
            <ProjectContainer />
          </Route>
          <Route path="/">
            <GalleryContainer />
          </Route>
        </Switch>
        <FooterContainer />
      </div>
    </Router>
  )
}

export default Routes
