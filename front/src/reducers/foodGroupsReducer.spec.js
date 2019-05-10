import reducer from './foodGroupsReducer'
import * as types from '../actions/types'

describe('food groups reducer tests', () => {
    const initialState = {
        dbFoodGroups: []
    }

    it('if no any group', () => {
        const action = {
            type: types.GET_DB_FOODGROUPES,
            payload: []
        }

        expect(reducer(initialState, action)).toEqual(initialState)
    })

    it('should handle GET_DB_FOODGROUPES', () => {
        const action = {
            type: types.GET_DB_FOODGROUPES,
            payload: [
                { foodGroup: '1' },
                { foodGroup: '2' }
            ]
        }

        expect(reducer(initialState, action)).not.toEqual({
            ...initialState,
            dbFoodGroups: action.payload,
        })

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            dbFoodGroups: action.payload.map(data => data.foodGroup),
        })
    })

    {
        const prevState = {
            dbFoodGroups: [
                { foodGroup: '1' },
                { foodGroup: '2' },
                { foodGroup: '3' }
            ]
        }

        it('should handle ADD_NEW_FOODGROUP. prevState + newState', () => {
            const action = {
                type: types.ADD_NEW_FOODGROUP,
                payload: [
                    { foodGroup: '1' },
                ]
            }
    
            expect(reducer(prevState, action)).toEqual({
                dbFoodGroups: [
                    ...prevState.dbFoodGroups, 
                    action.payload.foodGroup
                ],
            })
        })
    
        it('REMOVE_FOODGROUP. prevState - groupUnit', () => {
            const action = {
                type: types.REMOVE_FOODGROUP,
                payload: [
                    { foodGroup: '2' },
                ]
            }
    
            expect(reducer(prevState, action)).not.toEqual({
                dbFoodGroups: [
                    ...prevState.dbFoodGroups, 
                    action.payload.foodGroup
                ],
            })

            {
                prevState.dbFoodGroups.splice(prevState.dbFoodGroups.indexOf(action.foodGroup), 1)
            
                expect(reducer(prevState, action)).toEqual({
                    dbFoodGroups: prevState.dbFoodGroups
                })
            }
        })
    }
})