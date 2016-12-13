import { combineReducers } from 'redux'
import * as actions from '../actions/actions'

function users (state = [], action) {
  switch (action.type) {
    case actions.ADD_USER:
      return [
        ...state,
        {
          username: action.username,
          password: action.password
        }
      ]
    default:
      return state
  }
}

const managementApp = combineReducers({ users })

export default managementApp
