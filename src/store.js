import { reducer as formReducer } from 'redux-form'
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'
import thunk from 'redux-thunk'
const redux = require('redux')
const reactRedux = require('react-redux')
import reduceAddTask from './reducers/reduceAddTask'
import reduceEditTask from './reducers/reduceEditTask'
import reduceCompleteTask from './reducers/reduceCompleteTask'
import reduceUncompleteTask from './reducers/reduceUncompleteTask'

const ADD_TASK = 'addTask'
const EDIT_TASK = 'editTask'
const TOGGLE_EDIT = 'toggleEdit'
const COMPLETE_TASK = 'completeTask'
const UNCOMPLETE_TASK = 'uncompleteTask'
const TOGGLECOMPLETE_EDIT = 'toggleCompleteEdit'
const UPDATE_REDUXSTATE = 'updateReduxState'

const middleware = [ thunk ]
const enhancers = []
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose


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
    case UPDATE_REDUXSTATE:
      return reduceUpdateReduxState(state, action)
    default:
      return state
  }
}

const reduceUpdateReduxState = (state, action) => {
  let newState = {}
  Object.assign(newState, state)
  newState.TaskList = action.TaskList
  newState.EditList = action.EditList
  newState.TaskCount = action.TaskCount
  return newState
}


const reduceToggleEdit = (state, action) => {
  let newEditList = []
  newEditList.length = state.EditList.length
  newEditList.fill(false)
  newEditList[action.index] = !action.currentValue
  return {...state, EditList: newEditList}
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
  form: formReducer
}

const reducer = redux.combineReducers(reducers)

const store = redux.createStore(reducer, composeEnhancers(redux.applyMiddleware(...middleware), ...enhancers))

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
