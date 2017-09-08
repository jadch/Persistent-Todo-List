import React, { Component } from 'react'
import { connector } from './store.js'

const InputForm = require('./InputForm')
const ListItems = require('./ListItems')
const CompleteTasks = require('./CompleteTasks')
const AuthButton = require('./AuthButton')
const UserBar = require('./UserBar')

import AppTitle from './TinyComponents/AppTitle.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='MenuTopBar'>
          <AuthButton />
          <UserBar />
        </div>
        <AppTitle />
        <InputForm />
        <ListItems />
        <CompleteTasks />
      </div>
    )
  }
}

module.exports = connector(App)
