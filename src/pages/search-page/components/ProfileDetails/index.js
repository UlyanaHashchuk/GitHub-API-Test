import React from 'react'
import {
  Profile,
  Image,
  Info,
  Name,
  Bio,
  RepoInfo,
  RepoTitle,
} from './index.styles'
import { Link } from 'react-router-dom'

export default (profDetails) => (
  <Profile>
    <Image alt="avatar" src={profDetails.avatar_url} />
    <Info>
      <Name>{profDetails.name}</Name>
      <Bio>{profDetails.bio}</Bio>
      <Link
        to="/publicrepos"
        style={{
          textDecoration: 'none',
        }}
      >
        <RepoInfo>
          <div>
            <strong>{profDetails.public_repos}</strong>
          </div>
          <RepoTitle>Public Repositories</RepoTitle>
        </RepoInfo>
      </Link>
    </Info>
  </Profile>
)
