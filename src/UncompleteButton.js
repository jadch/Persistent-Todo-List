import { reduxForm } from 'redux-form'
const React = require('react')
const { connector } = require('./store')

const uncomplete = (uncompleteTask, itemIndex, itemValue) => {
  uncompleteTask(itemIndex, itemValue)
}

let UncompleteButton = React.createClass({
  render () {
    const { handleSubmit, submitting } = this.props
    return (
      <div className='CompleteButton'>
        <form onSubmit={handleSubmit(uncomplete.bind(this, this.props.uncompleteTask, this.props.item.index, this.props.item.value))}>
          <button type='submit' disabled={submitting}>Mark Uncomplete</button>
        </form>
      </div>
    )
  }
})

UncompleteButton = reduxForm({
  form: 'completeForm'
})(UncompleteButton)

module.exports = connector(UncompleteButton)
