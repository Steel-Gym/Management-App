import React, { PropTypes } from 'react'
import User from './User'

const UsersList = ({ users, onUserClick }) => (
  <ul>
    {
      users.map(user =>
        <User
          key={user.username}
          username={user.username}
          password={user.password}
          onClick={() => onUserClick(user.password)} />)
    }
  </ul>
)

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onUserClick: PropTypes.func.isRequired
}

export default UsersList

