import React from 'react'
import { connector } from './store'
import SignInComponent from './SignInComponent'
import SignOutComponent from './SignOutComponent'

class AuthButton extends React.Component {
  render () {
  let user = this.props.currentUser
  let HTMLify = user ? <SignOutComponent /> : <SignInComponent />

  return(
      <div>
        {HTMLify}
      </div>
    )
  }
}

module.exports = connector(AuthButton)
