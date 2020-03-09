import { receiveQuestions  } from './questions'
import { receiveUsers } from './user'
import { getInitialData } from '../utils/api';

export function handleInitialData() {
    return (dispatch) => {
        getInitialData()
        .then (({questions, users}) => {
            dispatch(receiveQuestions(questions))
            dispatch(receiveUsers(users))
        })
    }
}

