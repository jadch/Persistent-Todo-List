import { reducer as formReducer } from 'redux-form'
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'
const redux = require('redux')
const reactRedux = require('react-redux')

const ADD_TASK = 'addTask'
const EDIT_TASK = 'editTask'
const TOGGLE_EDIT = 'toggleEdit'
const COMPLETE_TASK = 'completeTask'
const UNCOMPLETE_TASK = 'uncompleteTask'
const TOGGLECOMPLETE_EDIT = 'toggleCompleteEdit'

const config = {
  apiKey: "AIzaSyBtRcXsIDYJ3EDnnQ8tw3uFBognc2XW67Y",
  authDomain: "todo-list-67a7b.firebaseapp.com",
  databaseURL: "https://todo-list-67a7b.firebaseio.com",
  projectId: "todo-list-67a7b",
  storageBucket: "todo-list-67a7b.appspot.com",
  messagingSenderId: "486254664276"
}

const initialState = {
  TaskList: ['buy milk', 'buy eggz'],
  CompletedTaskList: ['testing', 'pay bills'],
  EditList: [false, false],
  ToggleComplete: [false, false],
  TaskCount: 1
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return reduceAddTask(state, action)
    case EDIT_TASK:
      return reduceEditTask(state, action)
    case TOGGLE_EDIT:
      return reduceToggleEdit(state, action)
    case COMPLETE_TASK:
      return reduceCompleteTask(state, action)
    case UNCOMPLETE_TASK:
      return reduceUncompleteTask(state, action)
    case TOGGLECOMPLETE_EDIT:
      return reduceToggleCompleteEdit(state, action)
    default:
      return state
  }
}

const reduceAddTask = (state, action) => {
  let newState = {}
  Object.assign(newState, state)
  newState.TaskList.push(action.value)
  newState.EditList.push(false)
  newState.TaskCount = state.TaskCount + 1
  return newState
}

const reduceEditTask = (state, action) => {
  let newState = {}
  let index = action.index
  Object.assign(newState, state)
  newState.TaskList[index] = action.value
  return newState
}

const reduceToggleEdit = (state, action) => {
  let newEditList = []
  newEditList.length = state.EditList.length
  newEditList.fill(false)
  newEditList[action.index] = !action.currentValue
  return {...state, EditList: newEditList}
}

const reduceCompleteTask = (state, action) => {
  let newCompletedTaskList = state.CompletedTaskList.slice()
  let newTaskList = state.TaskList.slice()
  let newEditList = []
  let newToggleComplete = []
  newCompletedTaskList.push(action.value)
  newTaskList.splice(action.index, 1)
  newEditList.length = newTaskList.length
  newEditList.fill(false)
  newToggleComplete.length = newCompletedTaskList.length
  newToggleComplete.fill(false)
  return {...state, EditList: newEditList, TaskList: newTaskList, CompletedTaskList: newCompletedTaskList, ToggleComplete: newToggleComplete}
}

const reduceUncompleteTask = (state, action) => {
  let newCompletedTaskList = state.CompletedTaskList.slice()
  let newTaskList = state.TaskList.slice()
  let newToggleComplete = []
  newCompletedTaskList.splice(action.index, 1)
  newTaskList.push(action.value)
  newToggleComplete.length = newCompletedTaskList.length
  newToggleComplete.fill(false)
  return {...state, CompletedTaskList: newCompletedTaskList, TaskList: newTaskList, ToggleComplete: newToggleComplete}
}

const reduceToggleCompleteEdit = (state, action) => {
  let newToggleComplete = []
  newToggleComplete.length = state.CompletedTaskList.length
  newToggleComplete.fill(false)
  newToggleComplete[action.index] = !action.currentValue
  return {...state, ToggleComplete: newToggleComplete}
}

const reducers = {
  main: rootReducer,
  form: formReducer,
  firebase: firebaseStateReducer
}

const reducer = redux.combineReducers(reducers)

const store = redux.createStore(reducer, redux.compose(
  (typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f),
  reactReduxFirebase(config, { userProfile: 'users' })
))

const mapStateToProps = (state) => {
  return {
    TaskList: state.main.TaskList,
    CompletedTaskList: state.main.CompletedTaskList,
    EditList: state.main.EditList,
    ToggleComplete: state.main.ToggleComplete,
    FormElem: state.form
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (newTask) => {
      dispatch({type: ADD_TASK, value: newTask})
    },
    editTask: (newTask, index) => {
      dispatch({type: EDIT_TASK, value: newTask, index: index})
    },
    toggleEdit: (currentValue, index) => {
      dispatch({type: TOGGLE_EDIT, currentValue: currentValue, index: index})
    },
    completeTask: (index, value) => {
      dispatch({type: COMPLETE_TASK, index: index, value: value})
    },
    uncompleteTask: (index, value) => {
      dispatch({type: UNCOMPLETE_TASK, index: index, value: value})
    },
    toggleCompleteEdit: (currentValue, index) => {
      dispatch({type: TOGGLECOMPLETE_EDIT, currentValue: currentValue, index: index})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = {connector, store, rootReducer}
