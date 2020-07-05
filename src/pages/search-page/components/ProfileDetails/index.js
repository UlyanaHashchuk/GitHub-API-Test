import React from 'react'
import { Link } from 'react-router-dom'
import {
  Profile,
  Image,
  Info,
  Name,
  Bio,
  RepoInfo,
  RepoTitle,
} from './index.styles'

export default ({ avatar_url, name, bio, public_repos }) => (
  <Profile>
    <Image alt="avatar" src={avatar_url} />
    <Info>
      <Name>{name}</Name>
      <Bio>{bio}</Bio>
      <Link to="/GitHub-API-Test/publicrepos">
        <RepoInfo>
          <strong>{public_repos}</strong>
          <RepoTitle>Public Repositories</RepoTitle>
        </RepoInfo>
      </Link>
    </Info>
  </Profile>
)
