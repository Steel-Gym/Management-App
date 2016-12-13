import { connect } from 'react-redux'
import UsersList from '../components/UsersList'

const getUsers = (users) => {
  return users
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state.users)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUserClick: (password) => {
      window.alert('hahaha')
    }
  }
}

const FullUsersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList)

export default FullUsersList
