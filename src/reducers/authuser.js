import { SET_AUTH_USER, REMOVE_AUTH_USER } from '../actions/authuser'

export default function authUser(state = null, action) {
    switch (action.type) {
        case SET_AUTH_USER:
            return action.id
        case REMOVE_AUTH_USER:
            return null;
        default:
            return state;
    }
}