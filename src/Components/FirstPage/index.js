import React, { useState } from 'react'
import SearchForm from '../SearchForm'
import ProfileDetailsList from '../ProfileDetailsList'

export default () => {
  const [profDetails, setProfDetails] = useState([
    {
      avatar_url: 'https://avatars0.githubusercontent.com/u/18370260?v=4',
      name: 'Ulyana Hashchuk',
      bio: 'Live to travel, travel to live',
      public_repos: 5,
      id: 18370260,
    },
  ])

  const addNewDetails = (newDetails) => {
    setProfDetails(profDetails.concat(newDetails))
  }

  return (
    <>
      <SearchForm onSubmit={addNewDetails} />
      <ProfileDetailsList profDetails={profDetails} />
    </>
  )
}
