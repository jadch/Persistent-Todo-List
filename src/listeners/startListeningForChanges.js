import { database } from '../firebase.js'

const startListeningForChanges = () => {
  return (dispatch) => {
    database.ref('/').on('value', (snapshot) => {
      console.log('change!')
      dispatch(updateReduxState(snapshot.val()))
    })
  }
}

const updateReduxState = (snapshot) => {
  console.log('update')
  return {
    type: 'updateReduxState',
    TaskList: snapshot.TaskList,
    EditList: snapshot.EditList,
    TaskCount: snapshot.TaskCount
  }
}

export default startListeningForChanges
