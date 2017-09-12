import React, { Component } from 'react'
import { connector } from './store.js'

import AppTitle from './TinyComponents/AppTitle.js'

class LoginPage extends Component {
  render () {
    return (
      <div className='login-page'>
        <div className='column-A'>
        <AppTitle />
          <img src="http://via.placeholder.com/450x500" />
        </div>
        <div className='column-B'>
          <h1>Get More Stuff Done</h1>
          <p>Todoo is a simple, effective way of
          keeping track of all your tasks, lists, and just about everything else...</p>
          <section className='features'>
            <p>Features :</p>
            <ul>
              <li>ljkelddn</li>
              <li>zdffd dvfd</li>
              <li>feiclkbej kd</li>
            </ul>
          </section>
        </div>
      </div>
    )
  }
}

module.exports = connector(LoginPage)
