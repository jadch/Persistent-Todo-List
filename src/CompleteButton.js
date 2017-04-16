import { reduxForm } from 'redux-form'
const React = require('react')
const { connector } = require('./store')

const complete = (completeTask, itemIndex) => {
  completeTask(itemIndex)
}

let CompleteButton = React.createClass({
  render () {
    const { handleSubmit, submitting } = this.props
    return (
      <div className='CompleteButton'>
        <form onSubmit={handleSubmit(complete.bind(this, this.props.completeTask, this.props.itemIndex))}>
          <button type='submit' disabled={submitting}>Complete</button>
        </form>
      </div>
    )
  }
})

CompleteButton = reduxForm({
  form: 'completeForm'
})(CompleteButton)

module.exports = connector(CompleteButton)
