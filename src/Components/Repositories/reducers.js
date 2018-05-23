
import {
    REPOS_SUCCESS,
    REPOS_SEARCH,
    REPOS_FILTER_LANGUAGE,
    REPOS_FILTER_TYPE
} from './actions'

const repos = (state = { data: [], result: [] }, action) => {
    let data = state.data;
    switch (action.type) {
        case REPOS_SUCCESS:
            return { ...state, data: action.data, result: action.data };
        case REPOS_SEARCH:
            if (action.value !== '') {
                data = data.filter((item) => {
                    return item.name.toLowerCase().includes(action.value.toLowerCase());

                });
            }
            return { ...state, result: data };
        case REPOS_FILTER_LANGUAGE:
            if (action.value !== '' && action.value !== 'All') {
                data = data.filter((item) => {
                    if (item.language) {
                        return item.language.toLowerCase().includes(action.value.toLowerCase());
                    }
                    else {
                        return true
                    }

                });
            }
            return { ...state, result: data };
        case REPOS_FILTER_TYPE:
            console.log(action,state);
            if (action.value !== '' && action.value !== 'All') {
                data = data.filter((item) => {
                    /* if (action.value === "Sources") {
                        console.log(!(item.fork || item.archived || item.mirror_url === null));
                        if (!item.fork && !item.archived && item.mirror_url !== null)
                            return true;
                        else
                            return false;
                    } */
                    if (action.value === "Forks") {
                        console.log(item.fork);
                        return item.fork;
                    }
                    else if (action.value === "Archived") {
                        console.log(item.archived)
                        return item.archived;
                    }
                    else if (action.value === "Mirrors") {
                        console.log(item.mirror_url === null ? false : true);
                        return item.mirror_url === null ? false : true;
                    }
                    else {
                        return true
                    }

                });
            }
            return { ...state, result: data };
        default:
            return state
    }
}

export default repos
