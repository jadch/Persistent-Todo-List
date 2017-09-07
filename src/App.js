import React, { Component } from 'react'
import { connector } from './store.js'

const InputForm = require('./InputForm')
const ListItems = require('./ListItems')
const CompleteTasks = require('./CompleteTasks')
const AuthButton = require('./AuthButton')
const UserBar = require('./UserBar')

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='MenuTopBar'>
          <AuthButton />
          <UserBar />
        </div>
        <div className='Title'>
          <h1>Todoo List</h1>
        </div>
        <InputForm />
        <ListItems />
        <CompleteTasks />
      </div>
    )
  }
}

module.exports = connector(App)
