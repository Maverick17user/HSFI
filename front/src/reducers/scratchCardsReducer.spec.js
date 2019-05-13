import reducer from './scratchCardsReducer'
import * as types from '../actions/types'

describe('scratchCardsReducer tests', () => {

    it('SET_TOTAL_COST_IN_TRANSACTION (5*2)$ is 10$', () => {

        const changedState = {
            scratchCardData: {
                operatorName: '',
                transactionDate: '',
                licNumber: '',
                venName: '',
                venPhotoURL: '',
                foodGroup: '',
                cardsQuantity: '5',
                serialNumber: '',
                cardCost: '2',
                currency: '$',
                totalCost: ''
            }
        }

        const action = {
            type: types.SET_TOTAL_COST_IN_TRANSACTION
        }

        let totalCost = changedState.scratchCardData.totalCost

        if((changedState.scratchCardData.cardCost !== '') && (changedState.scratchCardData.cardsQuantity !== '')) {
            totalCost = 
                (changedState.scratchCardData.cardCost * 
                changedState.scratchCardData.cardsQuantity) +
                changedState.scratchCardData.currency
        } 

        expect(reducer(changedState, action)).toEqual(
            Object.assign({}, changedState, {
                scratchCardData: Object.assign({}, changedState.scratchCardData, {
                    totalCost: totalCost
                })
            })
        )
    })

})