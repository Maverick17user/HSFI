import reducer, {initialState} from './authReducer'
import * as types from '../actions/types'

describe('Auth reducer tests', () => {
    it('SET_CURRENT_USER-thenfalse', () => {
        const action = {
            type: types.SET_CURRENT_USER,
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isAuthenticated: false,
            user: undefined
        })
    })

    it('SET_CURRENT_USER-thentrue', () => {
        const action = {
            type: types.SET_CURRENT_USER,
            payload: "some_jwt_decoded_token",
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isAuthenticated: true,
            user: action.payload
        })
    })
}) 