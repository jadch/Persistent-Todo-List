const React = require('react')
const { connector } = require('./store')


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