import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import addCountryReducer from './addCountryReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    countries: addCountryReducer
});