import { database } from '../firebase.js'

const reduceEditTask = (state, action) => {
  // Updating local redux state
  let newState = {}
  let index = action.index
  Object.assign(newState, state)
  newState.TaskList[index] = action.value

  // Updating Firebase
  const uid = state.currentUser.uid
  database.ref(uid).set({
    TaskList: newState.TaskList,
    CompletedTaskList: newState.CompletedTaskList
  })

  return newState
}

export default reduceEditTask
