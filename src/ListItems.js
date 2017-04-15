const React = require('react')
const { connector } = require('./store')
const EditComponent = require('./EditComponent')

const ListItems = React.createClass({
  toggleEditFunc: (toggleEdit, currentValue, i) => {
    toggleEdit(currentValue, i)
  },
  render () {
    const TaskArray = this.props.TaskList
    const HTMLify = (array) => {
      var ArrayHTML = []
      for (let i = 0; i < array.length; i++) {
        ArrayHTML.push(
          <div>
            <li onClick={this.toggleEditFunc.bind(this, this.props.toggleEdit, this.props.EditList[i], i)}>{array[i]}</li>
            <div>{this.props.EditList[i] ? <EditComponent itemIndex={i} /> : ''}</div>
          </div>
        )
      }
      return ArrayHTML
    }

    return (
      <ul className='TaskList'>
        {HTMLify(TaskArray)}
      </ul>
    )
  }
})

module.exports = connector(ListItems)
