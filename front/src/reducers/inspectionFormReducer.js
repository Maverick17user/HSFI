import { 
    FETCH_IN_INSPECTION,
    SET_TOTAL_OSS_IN_INSPECTION,
    RESET
} from '../actions/types';

const initialState = {
    operatorName: '',
    date: '',
    licNum: '',
    vendorName: '',
    vendorPhoto: '',
    foodGroup: '',
    questionsStatus: [],
    totalOSS: 0,
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case FETCH_IN_INSPECTION: {
            let questionsStatus = state.questionsStatus
            for (let i = 0; i < action.payload.questions.length; i++) {
                questionsStatus.push({[`q${i+1}`]: ''})
            }
            return Object.assign({}, state, {
                operatorName: action.payload.operatorName,
                date: action.payload.date,
                licNum: action.payload.licNum,
                vendorName: action.payload.vendorName,
                vendorPhoto: action.payload.vendorPhoto,
                foodGroup: action.payload.foodGroup,
                questionsStatus
            })
        }

        case SET_TOTAL_OSS_IN_INSPECTION: {
            let questionsStatus = state.questionsStatus
            let index = questionsStatus.findIndex(statusUnit => {
                return Object.keys(statusUnit)[0] === action.target.name
            })


            if(index !== -1) {
                questionsStatus[index][action.target.name] = action.target.value

                let counter = 0
                const flagArray = questionsStatus.map(questionUnit => {
                    return questionUnit[Object.keys(questionUnit)[0]]
                })

                flagArray.forEach(flag => {
                    if (flag !== '') {
                        if(flag === '+') {
                            counter += 1
                        }
                        else {
                            counter -= 1
                        }
                    }
                });

                return Object.assign({}, state, {
                    totalOSS: counter
                })
            } 
            else {
                return state
            }
        }
        case RESET:
            return initialState   
        default: 
            return state;
    }
}