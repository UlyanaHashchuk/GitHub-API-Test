import {
  fetchDetailsBegin,
  fetchDetailsSuccess,
  fetchDetailsFailure,
} from '../../../redux/actions'

export const fetchDetailsAction = ({ login, name }) => {
  return (dispatch) => {
    dispatch(fetchDetailsBegin())
    fetch(`https://api.github.com/repos/${login}/${name}`)
      .then(handleErrors)
      .then((res) => res.json())
      .then((jsonResp) => {
        dispatch(fetchDetailsSuccess(jsonResp))
        return jsonResp
      })
      .catch((error) => dispatch(fetchDetailsFailure(error)))
  }
}

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}
