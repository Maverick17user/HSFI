import { SET_TOTAL_COST_IN_TRANSACTION} from '../types'

export const setTotalCost = data => {
    return {
        type: SET_TOTAL_COST_IN_TRANSACTION,
    }
}