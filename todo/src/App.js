import React, { Component } from 'react'
import { connector } from './store.js'

import AppTitle from './TinyComponents/AppTitle.js'

const InputForm = require('./InputForm')
const ListItems = require('./ListItems')
const CompleteTasks = require('./CompleteTasks')
const AuthButton = require('./AuthButton')
const UserBar = require('./UserBar')

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='NavBar'>
          <AppTitle />
          <UserBar />
          <AuthButton />
        </div>
        <InputForm />
        <ListItems />
        <CompleteTasks />
      </div>
    )
  }
}

module.exports = connector(App)
