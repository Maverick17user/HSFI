import { 
    FETCH_IN_REPORT,
    FETCH_COUNTRY_IN_REPORT,
    INPUT_CHANGE_IN_REPORT,
    MULTI_SELECT_IN_REPORT,
    REPORT_CHECKBOX_HANDLING,
    RESET
} from '../actions/types';

const initialState = {
    reportDate: '',
    from: '',
    to: '',
    countries: [],
    reportQueries: new Map()
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case FETCH_IN_REPORT: {
            return Object.assign({}, state, {
                reportDate: action.reportDate
            })
        }
        case FETCH_COUNTRY_IN_REPORT: {
            return Object.assign({}, state, {
                countries: action.payload
            })
        }
        case INPUT_CHANGE_IN_REPORT: {
            const {name, value} = action.payload
            return Object.assign({}, state, {
                [name]: value
            })
        }
        case MULTI_SELECT_IN_REPORT: {
            const countries = [...action.target.selectedOptions].map(o => o.value)
            return Object.assign({}, state, {
                countries
            })
        }
        case REPORT_CHECKBOX_HANDLING: {
            return Object.assign({}, state, {
                reportQueries: state.reportQueries.set(action.target.name, action.target.checked)
            })
        }
        case RESET:
            return initialState   
        default: 
            return state;
    }
}