import { Field, reduxForm } from 'redux-form'
const React = require('react')
const { connector } = require('./store')

const Edit = (editTask, index, reset, props) => {
  editTask(props.newItem, index)
  reset()
}

let EditComponent = React.createClass({
  render () {
    const oldTask = this.props.TaskList[this.props.itemIndex]
    const { handleSubmit, reset, submitting, pristine } = this.props
    return (
      <div>
        <div className='InputBar'>
          <form className='Flex-Row' onSubmit={handleSubmit(Edit.bind(this, this.props.editTask, this.props.itemIndex, reset))}>
            <div>
              <Field name='newItem' component='input' autoComplete='off' placeholder={oldTask} />
            </div>
            <button type='submit' disabled={pristine || submitting} >Edit</button>
          </form>
        </div>
      </div>
    )
  }
})

EditComponent = reduxForm({
  form: 'editForm'
})(EditComponent)

module.exports = connector(EditComponent)
