import firebase from 'firebase'
import   'firebase/firestore'
import firebaseconfig from './firebaseconfig'
 const firebaseApp = firebase.initializeApp(firebaseconfig)

export default firebase.firestore()
