import { database } from '../firebase.js'

const CompletedTaskList_ref = database.ref('/CompletedTaskList')
const TaskList_ref = database.ref('/TaskList')

const reduceUncompleteTask = (state, action) => {
  let newCompletedTaskList = state.CompletedTaskList.slice()
  let newTaskList = state.TaskList.slice()
  let newToggleComplete = []

  // Updating local redux state
  newCompletedTaskList.splice(action.index, 1)
  newTaskList.push(action.value)
  newToggleComplete.length = newCompletedTaskList.length
  newToggleComplete.fill(false)

  // Updating Firebase
  const uid = state.currentUser.uid
  database.ref(uid).set({
    TaskList: newTaskList,
    CompletedTaskList: newCompletedTaskList,
    EditList: state.EditList,
    ToggleComplete: newToggleComplete,
    TaskCount: state.TaskCount
  })
  return {...state, CompletedTaskList: newCompletedTaskList, TaskList: newTaskList, ToggleComplete: newToggleComplete}
}

export default reduceUncompleteTask
