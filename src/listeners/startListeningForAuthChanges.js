import { database, auth, googleAuthProvider } from '../firebase.js'
import startListeningForListChanges from './startListeningForListChanges.js'

const startListeningForAuthChanges = () => {
  return (dispatch) => {
    auth.onAuthStateChanged( (user) => {
      if (user) {
        dispatch(signedIn(user))
        dispatch(startListeningForListChanges())
      }
    })
  }
}

const signedIn = (user) => {
  console.log(user.displayName)
  return {
    type: 'updateAuthState',
    currentUser: user
  }
}

export default startListeningForAuthChanges
