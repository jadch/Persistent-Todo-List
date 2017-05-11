import React, { Component } from 'react'

const InputForm = require('./InputForm')
const ListItems = require('./ListItems')
const CompleteTasks = require('./CompleteTasks')
const FirebaseTest = require('./FirebaseTest')

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='Title'>
          <h1>To-Do List</h1>
        </div>
        <InputForm />
        <ListItems />
        <CompleteTasks />
        <FirebaseTest />
      </div>
    )
  }
}

export default App
