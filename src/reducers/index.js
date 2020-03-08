import { combineReducers } from 'redux'
import authUser from './authuser';
//import questions from './questions';
import users from './user';

export default combineReducers ({
    authUser,
    //questions, 
    users
})