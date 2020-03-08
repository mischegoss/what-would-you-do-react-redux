import { combineReducers } from 'redux'
import authedUser from './authuser';
//import questions from './questions';
import users from './user';

export default combineReducers ({
    authedUser,
    //questions, 
    users
})