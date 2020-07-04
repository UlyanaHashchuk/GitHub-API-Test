import React, { useState } from 'react'
import GlobalStyle from './index.styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import SearchPage from '../pages/search-page'
import ReposPage from '../pages/repos-page'
import ProfDetailsContext from '../contexts/ProfDetailsContext'

export default () => {
  const [profDetails, setProfDetails] = useState(null)

  return (
    <>
      <GlobalStyle />
      <Header />
      <ProfDetailsContext.Provider value={{ profDetails, setProfDetails }}>
        <Router>
          <Switch>
            <Route exact path="/GitHub-API-Test/publicrepos">
              <ReposPage />
            </Route>
            <Route path="/GitHub-API-Test">
              <SearchPage />
            </Route>
          </Switch>
        </Router>
      </ProfDetailsContext.Provider>
    </>
  )
}
