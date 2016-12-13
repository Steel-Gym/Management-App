import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions/actions'

let AddUser = ({ dispatch }) => {
  let username, password

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(addUser(username.value, password.value))
      }}>
        <input name='username' type='text' placeholder='username' ref={node => {
          username = node
        }} />
        <input name='password' type='password' placeholder='password' ref={node => {
          password = node
        }} />
        <button type='submit'>
          Add User
        </button>
      </form>
    </div>
  )
}
AddUser = connect()(AddUser)

export default AddUser
