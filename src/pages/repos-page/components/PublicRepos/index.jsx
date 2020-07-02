import React, { useState, useEffect } from 'react'

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
  }, [])

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
      <input
        type="text"
        value={searchInput}
        onChange={({ target: { value } }) => setSearchInput(value)}
      />
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <div>
        {getFormattedRepos().map(({ name, url, key, language, stars }) => (
          <div key={key}>
            <div>{name}</div>
            <div>{language}</div>
            <div>{stars}</div>
            <div>{url}</div>
          </div>
        ))}
      </div>
    </>
  )
}
