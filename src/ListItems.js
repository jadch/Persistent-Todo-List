const React = require('react')
const { connector } = require('./store')

const ListItems = React.createClass({
  render () {
    const TaskArray = this.props.TaskList
    const HTMLify = (array) => {
      var ArrayHTML = []
      for (let i = 0; i < array.length; i++) {
          ArrayHTML.push(
            <li>{array[i]}</li>
          )
      }
      return ArrayHTML
    }

    return(
      <ul className="TaskList">
        {HTMLify(TaskArray)}
      </ul>
    )
  }
})

module.exports = connector(ListItems)
