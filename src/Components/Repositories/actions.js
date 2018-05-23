import API from "../../Helpers/API.js";

export const REPOS_REQUEST = 'REPOS_REQUEST'
export const REPOS_SUCCESS = 'REPOS_SUCCESS'
export const REPOS_FAILURE = 'REPOS_FAILURE'
export const REPOS_SEARCH = 'REPOS_SEARCH'
export const REPOS_FILTER_LANGUAGE = 'REPOS_FILTER_LANGUAGE'
export const REPOS_FILTER_TYPE = 'REPOS_FILTER_TYPE'

export const fetchRepos = (id) => dispatch => {
    dispatch({ type: REPOS_REQUEST })
    return API(`https://api.github.com/users/${id}/repos`)
        .then(json => { dispatch({ type: REPOS_SUCCESS, data: json }) })
        .catch(err => dispatch({ type: REPOS_FAILURE }))
}

export const search = (txt) => dispatch => {
    dispatch({ type: REPOS_SEARCH,value:txt });
}
export const filterLanguage = (txt) => dispatch =>{
    dispatch({ type: REPOS_FILTER_LANGUAGE, value: txt });
}
export const filterType = (txt) => dispatch => {
    dispatch({ type: REPOS_FILTER_TYPE, value: txt });
}

