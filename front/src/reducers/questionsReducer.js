import { 
    GET_DB_QUESTIONS, 
    ADD_NEW_QUESTION, 
    REMOVE_QUESTION,
    RESET 
} from '../actions/types';

const initialState = {
    dbquestions: []
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_DB_QUESTIONS:
            const dbquestionsList = action.payload.map(qData => qData.question)
            return {
                ...state,
                dbquestions: dbquestionsList
            }
        case ADD_NEW_QUESTION:
            return Object.assign({}, state, {
                dbquestions: [...state.dbquestions, action.payload.question]
            })
        case REMOVE_QUESTION:
            state.dbquestions.splice(state.dbquestions.indexOf(action.question), 1)
            return Object.assign({}, state, {
                dbquestions: state.dbquestions
            })
        case RESET:
            return initialState           
        default: 
            return state;
    }
}