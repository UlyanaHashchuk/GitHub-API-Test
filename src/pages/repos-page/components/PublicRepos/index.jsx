import React, { useState, useEffect } from 'react'
import { Label } from '../../../search-page/components/SearchForm/index.styles'
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

const compareStars = ({ stars: starA }, { stars: starB }) => {
  if (starA < starB) {
    return 1
  }
  if (starA > starB) {
    return -1
  }
  return 0
}

export default ({ reposUrl }) => {
  const [publicRepos, setPublicRepos] = useState([])
  const [isChecked, setIsChecked] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadPublicRepos(reposUrl).then((publicRepos) => {
      setPublicRepos(publicRepos)
      setIsLoading(false)
    })
  }, [reposUrl])

  const getFilteredRepos = () => {
    let filteredRepos = [...publicRepos]

    if (isChecked) {
      filteredRepos = filteredRepos.sort(compareStars)
    }

    if (searchInput !== '') {
      filteredRepos = filteredRepos.filter(({ name }) =>
        name.toLowerCase().includes(searchInput.toLowerCase())
      )
    }

    return filteredRepos
  }

  return (
    <>
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
      {isLoading && <div>Loading...</div>}
      <Container>
        <Grid>
          {getFilteredRepos().map(({ name, url, key, language, stars }) => (
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
