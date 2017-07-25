import React, { Component } from 'react'
import { connector } from './store.js'

const InputForm = require('./InputForm')
const ListItems = require('./ListItems')
const CompleteTasks = require('./CompleteTasks')
const AuthButton = require('./AuthButton')

class App extends Component {
  render () {
    return (
      <div className='App'>
        <AuthButton />
        <div className='Title'>
          <h1>To-Do List</h1>
        </div>
        <InputForm />
        <ListItems />
        <CompleteTasks />
      </div>
    )
  }
}

module.exports = connector(App)
