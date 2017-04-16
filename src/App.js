import React, { Component } from 'react'

const InputForm = require('./InputForm')
const ListItems = require('./ListItems')
const CompleteTasks = require('./CompleteTasks')

class App extends Component {
  render () {
    return (
      <div className='App'>
        <InputForm />
        <ListItems />
        <CompleteTasks />
      </div>
    )
  }
}

export default App
