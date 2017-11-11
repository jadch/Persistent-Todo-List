import React from 'react'
import { connector } from './store'

class UserBar extends React.Component {
  render () {
  let user = this.props.currentUser

  return(
      <div>
        <p>Hello, {user.displayName}!</p>
      </div>
    )
  }
}

module.exports = connector(UserBar)