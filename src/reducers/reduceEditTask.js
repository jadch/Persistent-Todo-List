import { database } from '../firebase.js'

const TaskList_ref = database.ref('TaskList')

const reduceEditTask = (state, action) => {
  // Updating local redux state
  let newState = {}
  let index = action.index
  Object.assign(newState, state)
  newState.TaskList[index] = action.value
  // Updating Firebase
  TaskList_ref.set(newState.TaskList)
  return newState
}

export default reduceEditTask
