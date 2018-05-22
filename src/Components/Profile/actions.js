import API from "../../Helpers/API.js";

export const PROFILE_REQUEST = 'PROFILE_REQUEST'
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS'
export const PROFILE_FAILURE = 'PROFILE_FAILURE'



export const fetchProfile = (id) => dispatch => {
    dispatch({ type: PROFILE_REQUEST })
    return API(`https://api.github.com/users/${id}`)
        .then(json => dispatch({ type: PROFILE_SUCCESS, data: json }))
        .catch(err => dispatch({ type: PROFILE_FAILURE }))
}



