import { 
    FETCH_IN_TRANSACTION,
    INPUT_CHANGE_IN_TRANSACTION,
    FETCH_VENDOR_DATA_IN_TRANSACTION,
    SET_TOTAL_COST_IN_TRANSACTION,
    RESET
} from '../actions/types';

const initialState = {
    scratchCardData: {
        operatorName: '',
        transactionDate: '',
        licNumber: '',
        venName: '',
        venPhotoURL: '',
        foodGroup: '',
        cardsQuantity: '',
        serialNumber: '',
        cardCost: '',
        currency: '$',
        totalCost: ''
    }
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case FETCH_IN_TRANSACTION: {
            return Object.assign({}, state, {
                scratchCardData: Object.assign({}, state.scratchCardData, {
                    operatorName: action.payload,
                    transactionDate: new Date().toLocaleString().slice(0,10)
                })
            })
        }
        case INPUT_CHANGE_IN_TRANSACTION: {
            return Object.assign({}, state, {
                scratchCardData: Object.assign({}, state.scratchCardData, {
                    [action.payload.name]: action.payload.value,
                })
            })
        }
        case FETCH_VENDOR_DATA_IN_TRANSACTION: {
            return Object.assign({}, state, {
                scratchCardData: Object.assign({}, state.scratchCardData, {
                    venName: action.payload.venName,
                    venPhotoURL: action.payload.venPhotoURL,
                    foodGroup: action.payload.foodGroup
                })
            })
        }
        case SET_TOTAL_COST_IN_TRANSACTION: {
            const scratchCardData = state.scratchCardData
            let totalCost = scratchCardData.totalCost

            if((scratchCardData.cardCost !== '') && (scratchCardData.cardsQuantity !== '')) {
                totalCost = (scratchCardData.cardCost * scratchCardData.cardsQuantity) + scratchCardData.currency
            }
            
            return Object.assign({}, state, {
                scratchCardData: Object.assign({}, state.scratchCardData, {
                    totalCost: totalCost
                })
            })
        }
        case RESET:
            return initialState   
        default: 
            return state;
    }
}