import React, { PropTypes } from 'react'

const User = ({ onClick, username, password }) => (
  <li onClick={onClick}>
    <span>Username: {username}</span>
    <span>Password: {password}</span>
  </li>
)

User.propTypes = {
  onClick: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default User
