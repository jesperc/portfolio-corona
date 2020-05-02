import React from 'react'
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
import DataLoader from '../shared/data-loader'
import { ProjectType } from '../../db/models'
import ScrollToTop from '../shared/scrollToTop'

const Routes: React.FC = () => {
  let theme = useSelector((state: RootState) => state.theme)
  return (
    <Router>
      <div className={`${theme}`}>
        <div className="centered-background">
          <div className="content">
            <DataLoader />
            <Header />
            <Menu />
            <ScrollToTop />
            <Switch>
              <Route exact path="/project/:id">
                <Project />
              </Route>
              <Route exact path="/hobby">
                <Gallery type={ProjectType.hobby} />
              </Route>
              <Route exact path="/resume">
                <Resume />
              </Route>
              <Route exact path="/">
                <Gallery type={ProjectType.work} />
              </Route>
              <Route>
                <PageNotFound />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default Routes
