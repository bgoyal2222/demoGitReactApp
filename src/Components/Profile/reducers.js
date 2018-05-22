
import {
    PROFILE_SUCCESS
} from './actions'

const profile = (state=null, action) => {
    switch (action.type) {
        case PROFILE_SUCCESS:
            return action.data;
        default:
            return state
    }
}

export default profile
