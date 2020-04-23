import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../shared/header'
import Project from './project/project'
import Footer from '../shared/footer'
import Gallery from './index/gallery'
import Resume from './resume/resume'
import Menu from '../shared/menu'
import PageNotFound from './page-not-found'
import '../../style/global.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import { getItem } from '../../misc/localStorage'
import { LocalStorageKeys, StyleTheme } from '../../misc/enums'
import DataLoader from '../shared/data-loader'

const Routes: React.FC = () => {
  let theme = useSelector((state: RootState) => state.theme)
  useEffect(() => {
    theme =
      getItem(LocalStorageKeys.theme) === StyleTheme.dark
        ? StyleTheme.dark
        : StyleTheme.light
  }, [])

  return (
    <Router>
      <div className={theme}>
        <div className="app">
          <div className="main">
            <DataLoader />
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
          </div>
        </div>
      </div>
    </Router>
  )
}

export default Routes
