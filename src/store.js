import { reducer as formReducer } from 'redux-form'
const redux = require('redux')
const reactRedux = require('react-redux')

const ADD_TASK = 'addTask'
const EDIT_TASK = 'editTask'
const TOGGLE_EDIT = 'toggleEdit'
const COMPLETE_TASK = 'completeTask'

const initialState = {
  TaskList: ['buy milk', 'buy eggz'],
  CompletedTaskList: ['testing', 'buy bills'],
  EditList: [false, false],
  CompleteList: [false, false],
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
    default:
      return state
  }
}

const reduceAddTask = (state, action) => {
  let newState = {}
  Object.assign(newState, state)
  newState.TaskList.push(action.value)
  newState.EditList.push(false)
  newState.CompleteList.push(false)
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
  let newCompleteList = state.CompleteList.slice()
  let newCompletedTaskList = state.CompletedTaskList.slice()
  let newTaskList = state.TaskList.slice()
  newCompleteList[action.index] = true
  newCompletedTaskList.push(action.value)
  newTaskList.splice(action.index, 1)
  return {...state, CompleteList: newCompleteList, TaskList: newTaskList, CompletedTaskList: newCompletedTaskList}
}

const reducers = {
  main: rootReducer,
  form: formReducer
}

const reducer = redux.combineReducers(reducers)

const store = redux.createStore(reducer, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => {
  return {
    TaskList: state.main.TaskList,
    CompletedTaskList: state.main.CompletedTaskList,
    EditList: state.main.EditList,
    CompleteList: state.main.CompleteList,
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
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = {connector, store, rootReducer}
