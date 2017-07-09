import React from 'react'
import { auth, googleAuthProvider } from './firebase.js'
const { connector } = require('./store')

const SignInAction = () => {
  console.log('Sign in!')
  auth.signInWithPopup(googleAuthProvider)
}

class SignInComponent extends React.Component {
  render () {
    return(
      <div className='SignInComponent' onClick={SignInAction}>
        <button>
          Sign In
        </button>
      </div>
    )}
}

module.exports = connector(SignInComponent)
