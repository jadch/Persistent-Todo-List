import React, { Component } from 'react'

const InputForm = require('./InputForm')
const ListItems = require('./ListItems')

class App extends Component {
  render () {
    return (
      <div className='App'>
        <InputForm />
        <ListItems />
      </div>
    )
  }
}

export default App
