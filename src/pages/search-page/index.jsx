import React from 'react'
import SearchForm from './components/SearchForm'
import ProfileDetailsList from './components/ProfileDetailsList'
import ProfDetailsContext from '../../contexts/ProfDetailsContext'

export default () => {
  const { profDetails, setProfDetails } = React.useContext(ProfDetailsContext)

  const addNewDetails = (newDetails) => {
    setProfDetails(newDetails)
  }

  return (
    <>
      <SearchForm onSubmit={addNewDetails} />
      <ProfileDetailsList profDetails={profDetails} />
    </>
  )
}
