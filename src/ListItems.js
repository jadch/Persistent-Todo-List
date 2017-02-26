const React = require('react')

const ListItems = React.createClass({
  render () {
    const TaskArray = this.props.tasks
    const TaskArrayHTML = TaskArray.map( (item) => (
      <li key={item.key}>{item.text}</li>
    ))

    return(
      <ul className="TaskList">
        {TaskArrayHTML}
      </ul>
    )
  }
})

module.exports = ListItems
