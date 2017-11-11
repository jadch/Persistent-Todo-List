import React, { Component } from 'react'
import { connector } from './store.js'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import firebase from 'firebase'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render= {props => (
    console.log('*** USER ***', props.currentUser)
     (props.currentUser) ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class Test extends Component {
  render () {
    let user = firebase.auth().currentUser
    console.log(user)
    if (user) {
      return (
        <div>hey {user.displayName}</div>
      )
    }
    else {
      return  (
      <div>you are not signed in</div>
    )
    }
  }
}

module.exports = connector(Test)
