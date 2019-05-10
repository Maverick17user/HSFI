import reducer from './initialCountriesReducer'
import * as types from '../actions/types'

describe('countries reducer tests', () => {
    const initialState = {
        dbCountries: []
    }

    it('if no any country', () => {
        const action = {
            type: types.GET_DB_COUNTRIES,
            payload: []
        }

        expect(reducer(initialState, action)).toEqual(initialState)
    })

    it('should handle GET_DB_COUNTRIES', () => {
        const action = {
            type: types.GET_DB_COUNTRIES,
            payload: [
                { country: '1' },
                { country: '2' }
            ]
        }

        expect(reducer(initialState, action)).not.toEqual({
            ...initialState,
            dbCountries: action.payload,
        })

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            dbCountries: action.payload.map(data => data.country),
        })
    })

    {
        const prevState = {
            dbCountries: [
                { country: '1' },
                { country: '2' },
                { country: '3' }
            ]
        }

        it('should handle ADD_NEW_COUNTRY. prevState + newState', () => {
            const action = {
                type: types.ADD_NEW_COUNTRY,
                payload: [
                    { country: '1' },
                ]
            }
    
            expect(reducer(prevState, action)).toEqual({
                dbCountries: [
                    ...prevState.dbCountries, 
                    action.payload.country
                ],
            })
        })
    
        it('REMOVE_COUNTRY. prevState - countryUnit', () => {
            const action = {
                type: types.REMOVE_COUNTRY,
                payload: [
                    { country: '2' },
                ]
            }
    
            expect(reducer(prevState, action)).not.toEqual({
                dbCountries: [
                    ...prevState.dbCountries, 
                    action.payload.country
                ],
            })

            {
                prevState.dbCountries.splice(prevState.dbCountries.indexOf(action.country), 1)
            
                expect(reducer(prevState, action)).toEqual({
                    dbCountries: prevState.dbCountries
                })
            }
        })
    }
})