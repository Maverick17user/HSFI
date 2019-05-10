import reducer from './putAllVendorsIntoStoreReducer'
import * as types from '../actions/types'

describe('putAllVendorsIntoStore reducer tests', () => {
    const initialState = {
        dbVendors: []
    }

    it('if no any vendors', () => {
        const action = {
            type: types.GET_DB_VENDORS,
            payload: []
        }

        expect(reducer(initialState, action)).toEqual(initialState)
    })

    it('should handle GET_DB_VENDORS', () => {
        expect(
            reducer(initialState, {
                type: types.GET_DB_VENDORS,
                payload: ['Run the test']
            })
        ).toEqual({
            dbVendors: ['Run the test'],
        })
    })
}) 