import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../shared/header'
import Project from './project/project'
import Footer from '../shared/footer'
import Gallery from './index/gallery'
import Resume from './resume/resume'
import Menu from '../shared/menu'

const Routes = () => {
  return (
    <Router>
      <Header />
      <Menu />
      <Switch>
        <Route path="/project/:id">
          <Project />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <Gallery />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default Routes
