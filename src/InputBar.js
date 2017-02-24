const React = require('react')

const InputBar = React.createClass({
  render () {
    return (
      <div className="header">
        <form>
          <input placeholder="Enter a new task"></input>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
})

module.exports = InputBar
