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
import putAllVendorsIntoStoreReducer from './putAllVendorsIntoStoreReducer'
import sortVendorsReducer from './sortVendorsReducer'
import userProfileEditReducer from './userProfileEditReducer'
import inspectionFormReducer from './inspectionFormReducer'
import reportReducer from './reportReducer'
import reportDonwloadReducer from './reportDonwloadReducer'
import confirmNpcReducer from './confirmNpcReducer'

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    dbCountries: initialCountriesReducer,
    dbFoodGroups: foodGroupsReducer,
    dborganizations: orgsReducer,
    dbquestions: questionsReducer,
    dbVendors: putAllVendorsIntoStoreReducer,
    vendorRegData: venregReducer,
    scratchCardData: scratchCardsReducer,
    hotlineCall: hotlineReducer,
    sortedVens: sortVendorsReducer,
    userEditData: userProfileEditReducer,
    inspectionFormData: inspectionFormReducer,
    reportState: reportReducer,
    reportFileData: reportDonwloadReducer,
    usersToConfirm: confirmNpcReducer,
});