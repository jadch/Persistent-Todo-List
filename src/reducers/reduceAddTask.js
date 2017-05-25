import { database } from '../firebase.js'

const TaskList_ref = database.ref('TaskList')
const EditList_ref = database.ref('EditList')
const TaskCount_ref = database.ref('/TaskCount')

const reduceAddTask = (state, action) => {
  let newState = {}
  Object.assign(newState, state)
  newState.TaskList.push(action.value)
  newState.EditList.push(false)
  newState.TaskCount = state.TaskCount + 1

  TaskList_ref.set(newState.TaskList)
  EditList_ref.set(newState.EditList)
  TaskCount_ref.set(newState.TaskCount)

  return newState
}

export default reduceAddTask
