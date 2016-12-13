import React from 'react'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'
import managementApp from './reducers/reducers'

let store = createStore(managementApp)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App} />
    </Router>
  </Provider>,
  document.getElementById('content')
)