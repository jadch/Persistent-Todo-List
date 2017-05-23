const reduceAddTask = (state, action) => {
  let newState = {}
  Object.assign(newState, state)
  newState.TaskList.push(action.value)
  newState.EditList.push(false)
  newState.TaskCount = state.TaskCount + 1
  return newState
}

export default reduceAddTask
