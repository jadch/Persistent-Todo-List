import { database } from '../firebase.js'
import { auth } from '../firebase.js'

const startListeningForListChanges = () => {
  return (dispatch) => {
    let uid = auth.currentUser.uid
    database.ref(uid).on('value', (snapshot) => {
      console.log('change!')
      dispatch(updateReduxState(snapshot.val()))
    })
  }
}

const updateReduxState = (snapshot) => {
  return {
    type: 'updateReduxState',
    TaskList: snapshot.TaskList,
    CompletedTaskList: snapshot.CompletedTaskList,
    EditList: snapshot.EditList,
    ToggleComplete: snapshot.ToggleComplete,
    TaskCount: snapshot.TaskCount
  }
}

export default startListeningForListChanges
