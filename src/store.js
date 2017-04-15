import { reducer as formReducer } from 'redux-form'
const redux = require('redux')
const reactRedux = require('react-redux')

const ADD_TASK = 'addTask'
const EDIT_TASK = 'editTask'
const TOGGLE_EDIT = 'toggleEdit'

const initialState = {
  TaskList: ['buy milk', 'buy eggz'],
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
    EditList: state.main.EditList,
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
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = {connector, store, rootReducer}
