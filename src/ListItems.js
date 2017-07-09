const React = require('react')
const { connector } = require('./store')
const EditComponent = require('./EditComponent')
const CompleteButton = require('./CompleteButton')

class ListItems extends React.Component {
  toggleEditFunc(toggleEdit, currentValue, i) {
    toggleEdit(currentValue, i)
  }
  render () {
    const TaskArray = this.props.TaskList
    const HTMLify = (array) => {
      var ArrayHTML = []
      for (let i = 0; i < array.length; i++) {
        ArrayHTML.push(
          <div key={i}>
            <li onClick={this.toggleEditFunc.bind(this, this.props.toggleEdit, this.props.EditList[i], i)}>{array[i]}</li>
            <div>{this.props.EditList[i] ? <div className='Flex-Row'><EditComponent itemIndex={i} /> <CompleteButton item={{index: i, value: array[i]}} /></div> : ''}</div>
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
}

module.exports = connector(ListItems)
