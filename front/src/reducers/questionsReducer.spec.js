import reducer from './questionsReducer'
import * as types from '../actions/types'

describe('questions reducer tests', () => {
    const initialState = {
        dbquestions: []
    }

    it('if no any questions', () => {
        const action = {
            type: types.GET_DB_QUESTIONS,
            payload: []
        }

        expect(reducer(initialState, action)).toEqual(initialState)
    })

    it('should handle GET_DB_QUESTIONS', () => {
        const action = {
            type: types.GET_DB_QUESTIONS,
            payload: [
                { question: 'q1' },
                { question: 'q2' }
            ]
        }

        expect(reducer(initialState, action)).not.toEqual({
            ...initialState,
            dbquestions: action.payload,
        })

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            dbquestions: action.payload.map(data => data.question),
        })
    })

    {
        const prevState = {
            dbquestions: [
                { question: 'q1' },
                { question: 'q2' },
                { question: 'q3' }
            ]
        }

        it('should handle ADD_NEW_QUESTION. prevState + newState', () => {
            const action = {
                type: types.ADD_NEW_QUESTION,
                payload: [
                    { question: 'q1' },
                ]
            }
    
            expect(reducer(prevState, action)).toEqual({
                dbquestions: [
                    ...prevState.dbquestions, 
                    action.payload.question
                ],
            })
        })
    
        it('REMOVE_QUESTION. prevState - orgUnit', () => {
            const action = {
                type: types.REMOVE_QUESTION,
                payload: [
                    { question: 'q2' },
                ]
            }
    
            expect(reducer(prevState, action)).not.toEqual({
                dbquestions: [
                    ...prevState.dbquestions, 
                    action.payload.question
                ],
            })

            {
                prevState.dbquestions.splice(prevState.dbquestions.indexOf(action.question), 1)
            
                expect(reducer(prevState, action)).toEqual({
                    dbquestions: prevState.dbquestions
                })
            }
        })
    }
})