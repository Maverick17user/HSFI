import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import initialCountriesReducer from './initialCountriesReducer'
import foodGroupsReducer from './foodGroupsReducer'
import orgsReducer from './orgsReducer'
import questionsReducer from './questionsReducer'
import venregReducer from './venregReducer'
import scratchCardsReducer from './scratchCardsReducer'
import hotlineReducer from './hotlineReducer'

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    dbCountries: initialCountriesReducer,
    dbFoodGroups: foodGroupsReducer,
    dborganizations: orgsReducer,
    dbquestions: questionsReducer,
    vendorRegData: venregReducer,
    scratchCardData: scratchCardsReducer,
    hotlineCall: hotlineReducer,
});