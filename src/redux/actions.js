export const FETCH_DETAILS_BEGIN = 'FETCH_DETAILS_BEGIN'
export const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS'
export const FETCH_DETAILS_FAILURE = 'FETCH_DETAILS_FAILURE'

export const fetchDetailsBegin = () => ({
  type: FETCH_DETAILS_BEGIN,
})

export const fetchDetailsSuccess = (details) => ({
  type: FETCH_DETAILS_SUCCESS,
  details: details,
})

export const fetchDetailsFailure = (error) => ({
  type: FETCH_DETAILS_FAILURE,
  error: error,
})
