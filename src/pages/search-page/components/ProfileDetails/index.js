import React from 'react'
import { Profile, Image, Info } from './index.styles'
import { Link } from 'react-router-dom'

//component, the one that will display image and details as gathered from GitHub.

export default (profDetails) => (
  <Profile>
    <Image alt="avatar" src={profDetails.avatar_url} />
    <Info>
      <div>{profDetails.name}</div>
      <div>{profDetails.bio}</div>
      <Info>
        <Link to="/publicrepos">
          <div>Public reposetories</div>
          <div>{profDetails.public_repos}</div>
        </Link>
      </Info>
    </Info>
  </Profile>
)
