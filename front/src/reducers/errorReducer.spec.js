import reducer, {initialState} from './errorReducer'
import * as types from '../actions/types'

describe('Error reducer tests', () => {
    it('GET_ERRORS-ifWithNewPayload', () => {
        const action = {
            type: types.GET_ERRORS,
            payload: {
                country: 'Country undefined',
                email: 'Uncorect format'
            }
        }
        
        const stateBefore = {
            errors: {
                country: 'Is required',
                email: 'Uncorect format',
                name: 'You are not Petya!'
            }
        }

        expect(reducer(stateBefore, action)).not.toEqual(
            stateBefore
        )
    })

    it('GET_ERRORS-payload=String', () => {
        const action = {
            type: types.GET_ERRORS,
            payload: "Err text"
        }

        expect(reducer(initialState, action)).toEqual(
            action.payload
        )
    })

    it('GET_ERRORS-payload=Array', () => {
        const action = {
            type: types.GET_ERRORS,
            payload: [1,2,3]
        }

        expect(reducer(initialState, action)).not.toEqual(
            action.payload
        )
    })

    it('GET_ERRORS-payload=null', () => {
        const action = {
            type: types.GET_ERRORS,
            payload: null
        }

        expect(reducer(initialState, action)).not.toEqual(
            action.payload
        )
    })
})