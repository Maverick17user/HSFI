import reducer from './orgsReducer'
import * as types from '../actions/types'

describe('orgs reducer tests', () => {
    const initialState = {
        dborganizations: []
    }

    it('if no any organizations', () => {
        const action = {
            type: types.GET_DB_ORGS,
            payload: []
        }

        expect(reducer(initialState, action)).toEqual(initialState)
    })

    it('should handle GET_DB_ORGS', () => {
        const action = {
            type: types.GET_DB_ORGS,
            payload: [
                { organization: 'Org1' },
                { organization: 'Org2' }
            ]
        }

        expect(reducer(initialState, action)).not.toEqual({
            ...initialState,
            dborganizations: action.payload,
        })

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            dborganizations: action.payload.map(data => data.organization),
        })
    })

    {
        const prevState = {
            dborganizations: [
                { organization: 'Org1' },
                { organization: 'Org2' },
                { organization: 'Org3' }
            ]
        }

        it('should handle ADD_NEW_ORG. prevState + newState', () => {
            const action = {
                type: types.ADD_NEW_ORG,
                payload: [
                    { organization: 'Org1' },
                ]
            }
    
            expect(reducer(prevState, action)).toEqual({
                dborganizations: [
                    ...prevState.dborganizations, 
                    action.payload.organization
                ],
            })
        })
    
        it('REMOVE_ORG. prevState - orgUnit', () => {
            const action = {
                type: types.REMOVE_ORG,
                payload: [
                    { organization: 'Org2' },
                ]
            }
    
            expect(reducer(prevState, action)).not.toEqual({
                dborganizations: [
                    ...prevState.dborganizations, 
                    action.payload.organization
                ],
            })

            {
                prevState.dborganizations.splice(prevState.dborganizations.indexOf(action.organization), 1)
            
                expect(reducer(prevState, action)).toEqual({
                    dborganizations: prevState.dborganizations
                })
            }
        })
    }
}) 