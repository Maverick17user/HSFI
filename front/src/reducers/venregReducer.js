import { 
    FETCH_IN_VENREG, 
    INPUT_CHANGE_IN_VENREG, 
    MARKED_INPUT_CHANGE_IN_VENREG,
    MULTI_SELECT_CHANGE_IN_VENREG,
    CREATE_UNIT_IN_VENREG
} from '../actions/types';

const initialState = {
    vendorRegData: {
        operatorName: '',
        regDate: '',
        country: [{}],
        venName: '',
        venPhotoURL: '',
        licNumber: '',
        licScan: {},
        phone: '',
        email: '',
        buisnessLocation: [{}],
        buisnessSchedule: [{}],
        ingredientSource: [{}],
        foodGroup: ''
    }
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case FETCH_IN_VENREG: {
            return Object.assign({}, state, {
                vendorRegData: Object.assign({}, state.vendorRegData, {
                    operatorName: action.payload,
                    regDate: new Date().toLocaleString().slice(0,10)
                })
            })}
        case INPUT_CHANGE_IN_VENREG: {
            return Object.assign({}, state, {
                vendorRegData: Object.assign({}, state.vendorRegData, {
                    [action.payload.name]: action.payload.value,
                })
            })}
        case MARKED_INPUT_CHANGE_IN_VENREG: {
            const data = state.vendorRegData[action.prop]
            data[action.index][action.target.name] = action.target.value
            return Object.assign({}, state, {
                vendorRegData: Object.assign({}, state.vendorRegData, {
                    [action.prop]: data,
                })
            })}
        case MULTI_SELECT_CHANGE_IN_VENREG: {
            const data = state.vendorRegData[action.prop]
            data[action.index][action.target.name] = [...action.target.selectedOptions].map(o => o.value)
            return Object.assign({}, state, {
                vendorRegData: Object.assign({}, state.vendorRegData, {
                    [action.prop]: data,
                })
            })}
        case CREATE_UNIT_IN_VENREG: {
            const data = state.vendorRegData[action.prop]
            data.push({})
            return Object.assign({}, state, {
                vendorRegData: Object.assign({}, state.vendorRegData, {
                    [action.prop]: data,
                })
            })}
        default: 
            return state;
    }
}