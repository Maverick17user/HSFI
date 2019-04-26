import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import initialCountriesReducer from './initialCountriesReducer'
import venregReducer from './venregReducer'
import scratchCardsReducer from './scratchCardsReducer'

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    dbCountries: initialCountriesReducer,
    vendorRegData: venregReducer,
    scratchCardData: scratchCardsReducer
});