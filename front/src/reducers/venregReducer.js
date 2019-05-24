import { 
    FETCH_IN_VENREG, 
    INPUT_CHANGE_IN_VENREG, 
    MARKED_INPUT_CHANGE_IN_VENREG,
    MULTI_SELECT_CHANGE_IN_VENREG,
    CREATE_UNIT_IN_VENREG,
    REMOVE_UNIT_FROM_VENREG,
    SET_SINGLE_MAP_MARK_COORDINATES
} from '../actions/types';

const initialState = {
    vendorRegData: {
        operatorName: '',
        regDate: '',
        country: [{id:0}],
        venName: '',
        venPhotoURL: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
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
        gps: []
    }
}

export default function(state = initialState, action ) {
    let data, changed;
    if (action.prop !== undefined) {
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
        case CREATE_UNIT_IN_VENREG: {
            data.push({id: data[data.length-1].id+1})
            return Object.assign({}, state, {
                vendorRegData: Object.assign({}, state.vendorRegData, {
                    [action.prop]: data,
                })
            })}
        // TODO: gps dinamic removing by id
        case REMOVE_UNIT_FROM_VENREG: {

            // let gps = [...state.vendorRegData.gps]
            // let changedGpsUnitIndex = state.vendorRegData.gps.findIndex(gpsUnit => gpsUnit.id === action.index)

            data.splice(data.indexOf(changed[0]), 1)
            // gps.splice(gps.indexOf(changedGpsUnitIndex), 1)

            // console.log(gps);

            return Object.assign({}, state, {
                vendorRegData: Object.assign({}, state.vendorRegData, {
                    [action.prop]: data,
                    // gps
                })
            })} 
        case SET_SINGLE_MAP_MARK_COORDINATES: {
            const gpsWhatWasCreatedWithThisID = state.vendorRegData.gps.find(gpsUnit => gpsUnit.id === action.locationData.id)
            let gps

            if (!gpsWhatWasCreatedWithThisID) {
                gps = [...state.vendorRegData.gps, action.locationData]
            } else {
                let changedGpsUnitIndex = state.vendorRegData.gps.findIndex(gpsUnit => gpsUnit.id === action.locationData.id)
                gps = [...state.vendorRegData.gps]
                gps[changedGpsUnitIndex] = action.locationData
            }

            console.log(gps);
            return Object.assign({}, state, {
                vendorRegData: Object.assign({}, state.vendorRegData, {
                    gps
                })
            })} 
        default: 
            return state;
    }
}