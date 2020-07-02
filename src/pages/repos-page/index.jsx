import React from 'react'
import ProfDetailsContext from '../../contexts/ProfDetailsContext'
import PublicRepos from './components/PublicRepos'
import { Redirect } from 'react-router-dom'

export default () => {
  const { profDetails } = React.useContext(ProfDetailsContext)

  if (!profDetails) {
    return <Redirect to="/" />
  }

  const { repos_url } = profDetails

  return (
    <>
      <PublicRepos reposUrl={repos_url} />
    </>
  )
}
