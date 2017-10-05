import React, { Component } from 'react'
import { connector } from './store.js'

class Test extends Component {
  render () {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

module.exports = connector(Test)
