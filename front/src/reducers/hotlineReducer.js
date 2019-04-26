import { 
    FETCH_IN_HOTLINE,
    INPUT_CHANGE_IN_HOTLINE
} from '../actions/types';

const initialState = {
    hotlineCall: {
        operatorName: '',
        callDate: '',
        callerNationalID: '',
        scratchCardserialNumber: '',
    }
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case FETCH_IN_HOTLINE: {
            return Object.assign({}, state, {
                hotlineCall: Object.assign({}, state.hotlineCall, {
                    operatorName: action.payload,
                    callDate: new Date().toLocaleString().slice(0,10)
                })
            })
        }
        case INPUT_CHANGE_IN_HOTLINE: {
            return Object.assign({}, state, {
                hotlineCall: Object.assign({}, state.hotlineCall, {
                    [action.payload.name]: action.payload.value,
                })
            })
        }
        default: 
            return state;
    }
}