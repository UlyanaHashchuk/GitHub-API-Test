import React from 'react'
import ProfileDetails from '../ProfileDetails'

export default ({ profDetails }) => (
  <div>
    {profDetails && <ProfileDetails {...profDetails} key={profDetails.id} />}
  </div>
)
