const React = require('react')
const { connector } = require('./store')
import { database } from './firebase.js'

const FirebaseTest = React.createClass({
  render () {
    const handleAdd = () => {
      database.ref('/').push('hey firebase!')
    }
    
    return (
      <div>
        <h1>Hello {this.props.CompletedTaskList[0]}</h1>
        <button onClick={handleAdd}>
          Add
        </button>
      </div>
    )
  }
})

module.exports = connector(FirebaseTest)