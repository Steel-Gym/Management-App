import React from 'react'
import FullUsersList from './FullUsersList'
import AddUser from './AddUser'

export default React.createClass({
  render () {
    return (
      <div>
        <FullUsersList />
        <AddUser />
      </div>
    )
  }
})
