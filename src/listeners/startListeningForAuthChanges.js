import { database, auth, googleAuthProvider } from '../firebase.js'

const startListeningForAuthChanges = () => {
  return (dispatch) => {
    auth.onAuthStateChanged( (user) => {
      if (user) {
        dispatch(signedIn(user))
      }
    })
  }
}

const signedIn = (user) => {
  console.log(user.displayName)
}

export default startListeningForAuthChanges
