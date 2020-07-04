import React from 'react'
import SearchForm from './components/SearchForm'
import ProfileDetails from './components/ProfileDetails'
import ProfDetailsContext from '../../contexts/ProfDetailsContext'

export default () => {
  const { profDetails, setProfDetails } = React.useContext(ProfDetailsContext)

  const addNewDetails = (newDetails) => {
    setProfDetails(newDetails)
  }

  return (
    <>
      <SearchForm onSubmit={addNewDetails} />
      {profDetails && <ProfileDetails {...profDetails} />}
    </>
  )
}
