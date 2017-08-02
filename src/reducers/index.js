/**
 * Created by NguyenBa on 7/28/2017.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';

const reducer = combineReducers({
    auth,
    router: routerReducer,
});
export default reducer;