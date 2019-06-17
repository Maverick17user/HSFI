import { 
    FETCH_IN_VENREG, 
    FETCH_COUNTRY_IN_VENREG,
    INPUT_CHANGE_IN_VENREG, 
    MARKED_INPUT_CHANGE_IN_VENREG,
    MULTI_SELECT_CHANGE_IN_VENREG,
    SET_VENDOR_PICTURE_IN_VENREG,
    CREATE_UNIT_IN_VENREG,
    SET_SINGLE_MAP_MARK_COORDINATES,
    REMOVE_UNIT_FROM_VENREG,
    MARK_VENREG_SUCCESS,
    RESET,
    REMOVE_VENREG_STATE
} from '../actions/types';

const initialState = {
    vendorRegData: {
        operatorName: '',
        regDate: '',
        country: [{id:0}],
        venName: '',
        venPhotoURL: '',
        licNumber: '',
        licScanURL: 'https://www.repmyers.us/wp-content/uploads/2018/10/fake-business-license-unique-top-result-fake-driving-licence-template-awesome-fake-of-fake-business-license.jpg',
        phone: '',
        email: '',
        buisnessLocation: [{id:0}],
        buisnessSchedule: [{id:0}],
        ingredientSource: [{id:0}],
        foodGroup: '',
        flagStatus: '',
        hasBeenFlagged: false,
        oss: '',
        isOpen: true,
        gps: [],
        isSuccess: false
    }
}

export default function(state = initialState, action ) {
    let data, changed;
    if (action.prop) {
        data = state.vendorRegData[action.prop]
        changed = data.filter(unit => unit.id === action.index)
    }
    switch(action.type) {
        case FETCH_IN_VENREG: {
            return Object.assign({}, state, {
                vendorRegData: Object.assign({}, state.vendorRegData, {
                    operatorName: action.payload,
                    regDate: new Date().toLocaleString().slice(0,10)
                })
            })}

        case FETCH_COUNTRY_IN_VENREG: {
            return Object.assign({}, state, {
                vendorRegData: Object.assign({}, state.vendorRegData, {
                    country: [{id:0, country: action.payload}]
                })
            })}

        case INPUT_CHANGE_IN_VENREG: {
            return Object.assign({}, state, {
                vendorRegData: Object.assign({}, state.vendorRegData, {
                    [action.payload.name]: action.payload.value,
                })
            })}

        case MARKED_INPUT_CHANGE_IN_VENREG: {
            changed[0][action.target.name] = action.target.value
            return Object.assign({}, state, {
                vendorRegData: Object.assign({}, state.vendorRegData, {
                    [action.prop]: data,
                })
            })}
            
        case MULTI_SELECT_CHANGE_IN_VENREG: {
            changed[0][action.target.name] = [...action.target.selectedOptions].map(o => o.value)
            return Object.assign({}, state, {
                vendorRegData: Object.assign({}, state.vendorRegData, {
                    [action.prop]: data,
                })
            })}
        
        case SET_VENDOR_PICTURE_IN_VENREG: {
            return Object.assign({}, state, {
                vendorRegData: Object.assign({}, state.vendorRegData, {
                    venPhotoURL: action.payload,
                })
            })
        }

        case CREATE_UNIT_IN_VENREG: {
            data.push({id: data[data.length-1].id+1})
            return Object.assign({}, state, {
                vendorRegData: Object.assign({}, state.vendorRegData, {
                    [action.prop]: data,
                })
            })} 

        case REMOVE_UNIT_FROM_VENREG: {
            data.splice(data.indexOf(changed[0]), 1)
            return Object.assign({}, state, {
                vendorRegData: Object.assign({}, state.vendorRegData, {
                    [action.prop]: data,
                })
            })}

        case SET_SINGLE_MAP_MARK_COORDINATES: {
            const gpsWhatWasCreatedWithThisID = state.vendorRegData.gps.find(gpsUnit => gpsUnit.id === action.locationData.id)
            let gps

            if (!gpsWhatWasCreatedWithThisID) {
                gps = [...state.vendorRegData.gps, action.locationData]
            } 
            else {
                let changedGpsUnitIndex = state.vendorRegData.gps.findIndex(gpsUnit => gpsUnit.id === action.locationData.id)
                gps = [...state.vendorRegData.gps]
                gps[changedGpsUnitIndex] = action.locationData
            }

            return Object.assign({}, state, {
                vendorRegData: Object.assign({}, state.vendorRegData, {
                    gps
                })
            })}
        
        case MARK_VENREG_SUCCESS: {
            return Object.assign({}, state, {
                vendorRegData: Object.assign({}, state.vendorRegData, {
                    isSuccess: true
                })
            })
        }
        
        case REMOVE_VENREG_STATE: {
            return Object.assign({}, state, {
                vendorRegData: Object.assign({}, state.vendorRegData, {
                    venName: initialState.vendorRegData.venName,
                    venPhotoURL: initialState.vendorRegData.venPhotoURL,
                    licNumber: initialState.vendorRegData.licNumber,
                    licScanURL: initialState.vendorRegData.licScanURL,
                    phone: initialState.vendorRegData.phone,
                    email: initialState.vendorRegData.email,
                    buisnessLocation: [{id:0}],
                    buisnessSchedule: [{id:0}],
                    ingredientSource: [{id:0}],
                    foodGroup: initialState.vendorRegData.foodGroup,
                    flagStatus: initialState.vendorRegData.flagStatus,
                    hasBeenFlagged: initialState.vendorRegData.hasBeenFlagged,
                    oss: initialState.vendorRegData.oss,
                    isOpen: initialState.vendorRegData.isOpen,
                    gps: initialState.vendorRegData.gps,
                    isSuccess: false
                })
            })
        }
            
        case RESET:
            return initialState    
        default: 
            return state;
    }
}