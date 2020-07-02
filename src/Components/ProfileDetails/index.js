import React from 'react'
import { Profile, Image, ProfileInfo } from './index.styles'

//component, the one that will display image and details as gathered from GitHub.

export default ({ ...profDetail }) => (
  <Profile>
    <Image alt="avatar" src={profDetail.avatar_url} />
    <ProfileInfo>
      <div>{profDetail.name}</div>
      <div>{profDetail.bio}</div>
      <div>{profDetail.public_repos}</div>
    </ProfileInfo>
  </Profile>
)
