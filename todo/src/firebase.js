import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBtRcXsIDYJ3EDnnQ8tw3uFBognc2XW67Y",
  authDomain: "todo-list-67a7b.firebaseapp.com",
  databaseURL: "https://todo-list-67a7b.firebaseio.com",
  projectId: "todo-list-67a7b",
  storageBucket: "todo-list-67a7b.appspot.com",
  messagingSenderId: "486254664276"
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
