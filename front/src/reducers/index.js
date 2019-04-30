import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import initialCountriesReducer from './initialCountriesReducer'
import venregReducer from './venregReducer'
import scratchCardsReducer from './scratchCardsReducer'
import hotlineReducer from './hotlineReducer'
import foodGroupsReducer from './foodGroupsReducer'

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    dbCountries: initialCountriesReducer,
    dbFoodGroups: foodGroupsReducer,
    vendorRegData: venregReducer,
    scratchCardData: scratchCardsReducer,
    hotlineCall: hotlineReducer,
});