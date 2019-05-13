import reducer from './hotlineReducer'
import * as types from '../actions/types'

describe('hotlineReducer tests', () => {

    const initialState = {
        hotlineCall: {
            operatorName: '',
            callDate: '',
            callerNationalID: '',
            scratchCardserialNumber: '',
        }
    }

    it('FETCH_IN_HOTLINE - handling works as well', () => {
        const action = {
            type: types.FETCH_IN_HOTLINE,
            payload: 'Alex'
        }

        expect(reducer(initialState, action)).toEqual(
            Object.assign({},initialState,{
                hotlineCall: {
                    ...initialState.hotlineCall,
                    operatorName: action.payload,
                    callDate: new Date().toLocaleString().slice(0,10)
                }
            }) 
        )
    })

    it('FETCH_IN_HOTLINE - callDate is required', () => {
        const action = {
            type: types.FETCH_IN_HOTLINE,
            payload: 'Alex'
        }

        expect(reducer(initialState, action)).not.toEqual(
            Object.assign({},initialState,{
                hotlineCall: {
                    ...initialState.hotlineCall,
                    operatorName: action.payload,
                }
            }) 
        )
    })
})