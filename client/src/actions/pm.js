export const GET_PMS = 'GET_PMS'

export function getCohorts() {
    return function (dispatch) {
      return fetch('http://localhost:3001/pm', {
         credentials: 'include' })
        .then((res) => res.json())
        .then((cohorts) =>
          dispatch({
            type: GET_PMS,
            payload: cohorts,
          })
        )
    }
  }