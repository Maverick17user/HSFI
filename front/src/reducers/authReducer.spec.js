import reducer, {initialState} from './authReducer'
import * as types from '../actions/types'

describe('auth reducer tests', () => {
    it('SET_CURRENT_USER', () => {
        const action = {
            type: types.SET_CURRENT_USER,
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isAuthenticated: false,
            user: undefined
        })
    })
}) 