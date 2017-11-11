import { database, auth, googleAuthProvider } from '../firebase.js'
import startListeningForListChanges from './startListeningForListChanges.js'

const startListeningForAuthChanges = () => {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(signedIn(user))
        dispatch(startListeningForListChanges())
      } else {
        dispatch(signedOut())
      }
    })
  }
}

const signedIn = (user) => {
  return {
    type: 'updateAuthState',
    currentUser: user
  }
}

const signedOut = () => {
  return {
    type: 'updateAuthState',
    currentUser: ''
  }
}

export default startListeningForAuthChanges
