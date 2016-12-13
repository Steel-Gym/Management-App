export const ADD_USER = 'ADD_USER'

export function addUser (username, password) {
  return {
    type: ADD_USER, username, password
  }
}
