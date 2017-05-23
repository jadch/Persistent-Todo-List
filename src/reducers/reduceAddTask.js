import { database } from '../firebase.js'

const TaskList_ref = database.ref('TaskList')
const EditList_ref = database.ref('EditList')
const TaskCount_ref = database.ref('/')

const reduceAddTask = (state, action) => {
  let newState = {}
  Object.assign(newState, state)
  newState.TaskList.push(action.value)
  newState.EditList.push(false)
  newState.TaskCount = state.TaskCount + 1

  TaskList_ref.update(newState.TaskList)
  EditList_ref.update(newState.EditList)
  TaskCount_ref.update({
    TaskCount: newState.TaskCount
  })


  return newState
}

export default reduceAddTask
