const React = require('react')

const InputBar = React.createClass({
  getInitialState () {
    return {
      TaskList: []
    }
  },
  addTask (Task) {
    const items = this.state.TaskList
    items.push({text: this._inputElement.value, key: Date.now()})
    this.setState({
      TaskList: items
    })
    this._inputElement.value = ""
    Task.preventDefault() /*Preventing default onSubmit POST event behavior*/
  },
  render () {
    return (
      <div className="InputBar">
        <form onSubmit={this.addTask}>
          <input ref={(a) => this._inputElement = a} placeholder="Enter a new task"></input>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
})

module.exports = InputBar
