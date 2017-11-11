import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './store'
import startListeningForListChanges from './listeners/startListeningForListChanges.js'
import startListeningForAuthChanges from './listeners/startListeningForAuthChanges'
import { auth } from './firebase.js'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import Test from './testingPage'
import {
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

const isAuth = () => {

}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
     (!props.currentUser) ? (
       <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/login' component={LoginPage} />
        <PrivateRoute path='/testing' component={Test} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)

store.dispatch(startListeningForAuthChanges())
