const React = require('react')
const { connector } = require('./store')
const EditComponent = require('./EditComponent')

const ListItems = React.createClass({
  render () {
    const TaskArray = this.props.TaskList
    const HTMLify = (array) => {
      var ArrayHTML = []
      for (let i = 0; i < array.length; i++) {
          ArrayHTML.push(
            <div>
              <li>{array[i]}</li>
              {this.props.Tasks[i].showEdit ? <EditComponent itemIndex="1" /> : ""}
            </div>
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
