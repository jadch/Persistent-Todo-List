import { database } from '../firebase.js'

const startListeningForChanges = () => {
  return (dispatch) => {
    database.ref('/').on('value', (snapshot) => {
      console.log('change!')
    })
  }
}

export default startListeningForChanges
