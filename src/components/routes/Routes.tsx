import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../shared/header'
import Project from './project/project'
import Footer from '../shared/footer'
import Gallery from './index/gallery'
import Resume from './resume/resume'
import Menu from '../shared/menu'
import PageNotFound from './page-not-found'
import Loader from '../shared/loader'

const Routes = () => {
  return (
    <Router>
      <Loader />
      <Header />
      <Menu />

      <Switch>
        <Route exact path="/project/:id">
          <Project />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/">
          <Gallery />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>

      <Footer />
    </Router>
  )
}

export default Routes
