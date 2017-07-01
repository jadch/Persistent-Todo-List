import { database } from '../firebase.js'

const reduceAddTask = (state, action) => {
  let newState = {}
  Object.assign(newState, state)

  // Updating local redux state
  newState.TaskList.push(action.value)
  newState.EditList.push(false)
  newState.TaskCount = state.TaskCount + 1

  // Updating firebase
  const uid = state.currentUser.uid
  const TaskList_ref = database.ref(uid + '/TaskList')
  const EditList_ref = database.ref(uid + '/EditList')
  const TaskCount_ref = database.ref(uid + '/TaskCount')

  TaskList_ref.set(newState.TaskList)
  EditList_ref.set(newState.EditList)
  TaskCount_ref.set(newState.TaskCount)

  return newState
}

export default reduceAddTask
