import {
  FETCH_DETAILS_BEGIN,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_FAILURE,
} from './actions'

const initialState = {
  loading: false,
  details: [],
  error: null,
}

export function reducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_DETAILS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        details: [action.details],
      }
    case FETCH_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        details: [],
      }
    default:
      return state
  }
}
