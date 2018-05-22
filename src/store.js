import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import profile from "./Components/Profile/reducers";
import repos from "./Components/Repositories/reducers";
import thunk from 'redux-thunk';



const store = applyMiddleware(thunk)(createStore)(combineReducers({
    profile,
    repos
}));

export default store