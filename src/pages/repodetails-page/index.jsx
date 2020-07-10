import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchDetailsAction } from './ApiFetch'
import { Container, Title, Date, Clone, Code, Homepage } from './index.styles'
import {
  RepoName,
  Language,
  Stars,
} from '../repos-page/components/PublicRepos/index.styles'

const RepoDetails = ({
  error,
  loading,
  details,
  fetchDetails,
  match: { params },
}) => {
  const { login, name } = params

  useEffect(() => fetchDetails({ login, name }), [])

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }

  return (
    <Container>
      <Title>Repository details:</Title>
      {details.map(
        ({
          id,
          name,
          stargazers_count,
          html_url,
          clone_url,
          created_at,
          language,
          homepage,
        }) => (
          <div key={id}>
            <RepoName href={html_url} target="_blank">
              {name}
            </RepoName>
            <Language>{language}</Language>
            <Stars>☆{stargazers_count}</Stars>
            <Clone>
              Clone url: <Code>{clone_url}</Code>
            </Clone>
            <Homepage href={homepage} target="_blank">
              {homepage}
            </Homepage>
            <Date>Created: {created_at}</Date>
          </div>
        )
      )}
    </Container>
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  details: state.details,
  error: state.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchDetails: (props) => dispatch(fetchDetailsAction(props)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetails)
