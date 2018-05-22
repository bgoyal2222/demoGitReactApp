
import {
    REPOS_SUCCESS
} from './actions'

const repos = (state=[], action) => {
    switch (action.type) {
        case REPOS_SUCCESS:
            return action.data;
        default:
            return state
    }
}

export default repos
