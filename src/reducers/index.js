import { combineReducers } from 'redux'
import authedUser from './authuser';
import questions from './question';
import users from './user';

export default combineReducers ({
    authedUser,
    questions, 
    users
})