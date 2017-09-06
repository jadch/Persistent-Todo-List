import React, { Component } from 'react'
import { connector } from './store.js'

class LoginPage extends Component {
  render () {
    return (
      <div>
        <h1>Test!</h1>
        <p>................</p>
      </div>
    )
  }
}

module.exports = connector(LoginPage)
