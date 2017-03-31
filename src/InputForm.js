const React = require('react')
const { connector } = require('./store')

import { Field, reduxForm } from 'redux-form'

const showResults = (addTask, props) => {
  addTask(props.newItem)
}


let InputForm = React.createClass({
  render() {
    const { handleSubmit } = this.props
    return (
      <div className="InputBar">
        <form onSubmit={handleSubmit(showResults.bind(this, this.props.addTask))}>
          <div>
            <Field name="newItem" component="input" placeholder="Add a new task"/>
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    )}
})

InputForm = reduxForm({
  form: 'LiveForm'
})(InputForm)

module.exports = connector(InputForm)
