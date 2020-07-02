import React from 'react'
import ProfileDetails from '../ProfileDetails'

export default ({ profDetails }) => (
  <div>
    {profDetails.map((profDetail) => (
      <ProfileDetails {...profDetail} key={profDetail.id} />
    ))}
  </div>
)
