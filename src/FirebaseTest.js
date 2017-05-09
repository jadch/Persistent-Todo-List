const React = require('react')
const { connector } = require('./store')
const firebase = require('firebase')

const config = {
  apiKey: "AIzaSyBtRcXsIDYJ3EDnnQ8tw3uFBognc2XW67Y",
  authDomain: "todo-list-67a7b.firebaseapp.com",
  databaseURL: "https://todo-list-67a7b.firebaseio.com",
  projectId: "todo-list-67a7b",
  storageBucket: "todo-list-67a7b.appspot.com",
  messagingSenderId: "486254664276"
}

const database = firebase.initializeApp(config)

const FirebaseTest = React.createClass({
  render () {
    const handleAdd = () => {
      database.push('/todos', { text:'hey firebase', done:false })
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