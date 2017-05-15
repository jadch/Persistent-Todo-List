import React from 'react'
const { connector } = require('./store')

let SignInComponent = React.createClass({
  render () {
    return(
      <div className='SignInComponent'>
        <button>
          Sign In
        </button>
      </div>
    )}
})

module.exports = connector(SignInComponent)
