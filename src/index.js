import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './store'
import startListeningForListChanges from './listeners/startListeningForListChanges.js'
import startListeningForAuthChanges from './listeners/startListeningForAuthChanges'
import { auth } from './firebase.js'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(startListeningForAuthChanges())
