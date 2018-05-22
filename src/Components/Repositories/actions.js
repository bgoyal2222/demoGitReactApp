import API from "../../Helpers/API.js";

export const REPOS_REQUEST = 'REPOS_REQUEST'
export const REPOS_SUCCESS = 'REPOS_SUCCESS'
export const REPOS_FAILURE = 'REPOS_FAILURE'



export const fetchRepos = (id) => dispatch => {
    dispatch({ type: REPOS_REQUEST })
    return API(`https://api.github.com/users/${id}/repos`)
        .then(json => { dispatch({ type: REPOS_SUCCESS, data: json }) })
        .catch(err => dispatch({ type: REPOS_FAILURE }))
}



