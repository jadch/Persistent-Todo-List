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
  database.ref(uid).set({
    TaskList: newState.TaskList,
    CompletedTaskList: newState.CompletedTaskList
  })

  return newState
}

export default reduceAddTask
