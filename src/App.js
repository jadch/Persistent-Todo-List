import React, { Component } from 'react'
import { connector } from './store.js'

const InputForm = require('./InputForm')
const ListItems = require('./ListItems')
const CompleteTasks = require('./CompleteTasks')
const SignInComponent = require('./SignInComponent')
const SignOutComponent = require('./SignOutComponent')
const AuthButton = require('./AuthButton')

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='Title'>
          <h1>To-Do List</h1>
        </div>
        <AuthButton />
        <InputForm />
        <ListItems />
        <CompleteTasks />
        <SignInComponent />
        <SignOutComponent />
      </div>
    )
  }
}

module.exports = connector(App)
