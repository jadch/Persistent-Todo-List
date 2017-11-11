import { Field, reduxForm } from 'redux-form'
const React = require('react')
const { connector } = require('./store')

const showResults = (addTask, reset, props) => {
  addTask(props.newItem)
  reset()
}

const validate = (values) => {
  const errors = {}
  if (values.newItem && values.newItem.match(/^\s+$/) != null) {
    errors.newItem = 'Cannot be blank'
  }
  return errors
}

class InputForm extends React.Component {
  render () {
    const { handleSubmit, pristine, submitting, reset, invalid } = this.props
    return (
      <div className='MainInputBar'>
        <form onSubmit={handleSubmit(showResults.bind(this, this.props.addTask, reset))} className='Flex-Row'>
          <div>
            <Field name='newItem' component='input' autoComplete='off' placeholder='Add a new task' />
          </div>
          <button type='submit' disabled={invalid || pristine || submitting} >Add</button>
        </form>
      </div>
    )
  }
}

InputForm = reduxForm({
  form: 'addForm',
  validate
})(InputForm)

module.exports = connector(InputForm)
