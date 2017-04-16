const React = require('react')
const { connector } = require('./store')

const CompleteTasks = React.createClass({
  render () {
    const completeTaskArray = this.props.CompletedTaskList
    const HTMLify = (array) => {
      var ArrayHTML = []
      for (let i = 0; i < array.length; i++) {
        ArrayHTML.push(
          <li>{array[i]}</li>
        )
      }
      return ArrayHTML
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
})

module.exports = connector(CompleteTasks)
