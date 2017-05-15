import React from 'react'
import { auth } from './firebase.js'
const { connector } = require('./store')

const SignOutAction = () => {
  console.log('Sign out!')
  auth.signOut()
}

let SignOutComponent = React.createClass({
  render () {
    return(
      <div className='SignOutComponent' onClick={SignOutAction}>
        <button>
          Sign Out
        </button>
      </div>
    )}
})

module.exports = connector(SignOutComponent)
