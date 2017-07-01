import { database } from '../firebase.js'

const CompletedTaskList_ref = database.ref('/CompletedTaskList')
const TaskList_ref = database.ref('/TaskList')

const reduceCompleteTask = (state, action) => {
  let newCompletedTaskList = state.CompletedTaskList.slice()
  let newTaskList = state.TaskList.slice()
  let newEditList = []
  let newToggleComplete = []

  // Updating local redux state
  newCompletedTaskList.push(action.value)
  newTaskList.splice(action.index, 1)
  newEditList.length = newTaskList.length
  newEditList.fill(false)
  newToggleComplete.length = newCompletedTaskList.length
  newToggleComplete.fill(false)

  // Updating Firebase
  const uid = state.currentUser.uid
  database.ref(uid).set({
    TaskList: newTaskList,
    CompletedTaskList: newCompletedTaskList
  })

  return {...state, EditList: newEditList, TaskList: newTaskList, CompletedTaskList: newCompletedTaskList, ToggleComplete: newToggleComplete}
}

export default reduceCompleteTask
