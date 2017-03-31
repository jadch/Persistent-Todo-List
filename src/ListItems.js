const React = require('react')
const { connector } = require('./store')

const ListItems = React.createClass({
  render () {
    const TaskArray = this.props.TaskList
    const TaskArrayHTML = TaskArray.map( (item) => (
      <li>{item}</li>
    ))

    return(
      <ul className="TaskList">
        {TaskArrayHTML}
      </ul>
    )
  }
})

module.exports = connector(ListItems)
