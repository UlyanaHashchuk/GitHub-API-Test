import React, { useState, useEffect } from 'react'
import {
  RepoSearch,
  RepoInput,
  CheckboxLabel,
  Checkbox,
  Container,
  Grid,
  RepoName,
  Language,
  Stars,
  RepoBox,
} from './index.styles'
import { Label } from '../../../search-page/components/SearchForm/index.styles'

const loadPublicRepos = (reposUrl) =>
  new Promise((resolve) => {
    fetch(reposUrl).then((resp) =>
      resp.json().then((jsonResp) =>
        resolve(
          jsonResp.map((repo) => ({
            name: repo.name,
            key: repo.id,
            stars: repo.stargazers_count,
            language: repo.language,
            url: repo.html_url,
          }))
        )
      )
    )
  })

const starsSort = ({ stars: starsA }, { stars: starsB }) => {
  if (starsA < starsB) {
    return 1
  }
  if (starsA > starsB) {
    return -1
  }
  return 0
}

export default ({ reposUrl }) => {
  const [publicRepos, setPublicRepos] = useState([])
  const [isChecked, setIsChecked] = useState(false)
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    loadPublicRepos(reposUrl).then((publicRepos) => setPublicRepos(publicRepos))
  }, [reposUrl])

  const getFormattedRepos = () => {
    let formattedRepos = [...publicRepos]

    if (isChecked) {
      formattedRepos = formattedRepos.sort(starsSort)
    }

    if (searchInput !== '') {
      formattedRepos = formattedRepos.filter(({ name }) =>
        name.includes(searchInput)
      )
    }

    return formattedRepos
  }

  return (
    <>
      {!publicRepos.length && <div>Loading...</div>}
      <RepoSearch>
        <Label>Search repository by name</Label>
        <RepoInput
          type="text"
          value={searchInput}
          onChange={({ target: { value } }) => setSearchInput(value)}
          placeholder="Repository name..."
        />
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          Sort by stars
        </CheckboxLabel>
      </RepoSearch>
      <Container>
        <Grid>
          {getFormattedRepos().map(({ name, url, key, language, stars }) => (
            <RepoBox key={key}>
              <RepoName href={url}>{name}</RepoName>
              <Stars>☆{stars}</Stars>
              <Language>{language}</Language>
            </RepoBox>
          ))}
        </Grid>
      </Container>
    </>
  )
}
