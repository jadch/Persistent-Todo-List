const React = require('react')
const { connector } = require('./store')
const UncompleteButton = require('./UncompleteButton')

class CompleteTasks extends React.Component {
  toggleEditFunc (toggleCompleteEdit, currentValue, i) {
    toggleCompleteEdit(currentValue, i)
  }

  render () {
    const completeTaskArray = this.props.CompletedTaskList
    const HTMLify = (array) => {
      var ArrayHTML = []
      for (let i = 0; i < array.length; i++) {
        ArrayHTML.push(
          <div key={i}>
            <li onClick={this.toggleEditFunc.bind(this, this.props.toggleCompleteEdit, this.props.ToggleComplete[i], i)}>{array[i]}</li>
            <div>{this.props.ToggleComplete[i] ? <UncompleteButton item={{index: i, value: array[i]}} /> : ''}</div>
          </div>
        )
      }
      return ArrayHTML
    }

    if (completeTaskArray.length === 0) {
      return (
        <div></div>
      )
    }

    return (
      <div className='Complete'>
        <h2>Completed Tasks</h2>
        <ul className='CompleteTaskList'>
          {HTMLify(completeTaskArray)}
        </ul>
      </div>
    )
  }
}

module.exports = connector(CompleteTasks)
