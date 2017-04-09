const React = require('react')
const { connector } = require('./store')

import { Field, reduxForm } from 'redux-form'

const Edit = (reset, props) => {
  console.log("Edit success")
  reset()
}

let EditComponent = React.createClass({
  render() {
    const old_version = this.props.TaskList[this.props.itemIndex]
    const { handleSubmit, reset, pristine, submitting } = this.props

    return (
      <div>
        <div className="InputBar">
          <form onSubmit={handleSubmit(Edit.bind(this, reset))}>
            <div>
              <Field name="newItem" component="input" placeholder={old_version}/>
            </div>
            <button type="submit" disabled={submitting} >Edit</button>
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
