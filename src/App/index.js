import React, { useState } from 'react'
import GlobalStyle from './index.styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProfDetailsContext from '../contexts/ProfDetailsContext'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Header from '../components/Header'
import SearchPage from '../pages/search-page'
import ReposPage from '../pages/repos-page'
import RepoDetails from '../pages/repodetails-page'

export default () => {
  const [profDetails, setProfDetails] = useState(null)

  return (
    <>
      <GlobalStyle />
      <Header />
      <ProfDetailsContext.Provider value={{ profDetails, setProfDetails }}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route
                exact
                path="/GitHub-API-Test/:login/:name"
                component={RepoDetails}
              />
              <Route exact path="/GitHub-API-Test/publicrepos">
                <ReposPage />
              </Route>
              <Route path="/GitHub-API-Test/">
                <SearchPage />
              </Route>
            </Switch>
          </Router>
        </Provider>
      </ProfDetailsContext.Provider>
    </>
  )
}
