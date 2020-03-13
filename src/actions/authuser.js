//Set user auth

export const SET_AUTH_USER = 'SET_AUTH_USER'


export function setAuthUser(id) {
  return {
    type: SET_AUTH_USER,
    id,
  };
}

//Remove user auth

export const REMOVE_AUTH_USER = 'REMOVE_AUTH_USER';

export function removeAuthUser() {
  return {
    type: REMOVE_AUTH_USER,
  };
}

export const GET_AUTH_USER = 'GET_AUTH_USER'
export function getAuthUser () {
  return {
    type: GET_AUTH_USER,
  }
}
