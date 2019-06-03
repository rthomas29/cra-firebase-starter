import React, { useEffect, useContext } from 'react'
import { FirebaseContext } from '../../firebase/index'
import 'firebase/auth'
import AuthForm from './components/AuthForm'

function Auth({ history }) {
  const firebase = useContext(FirebaseContext)

  const createUserWithEmailAndPassword = (email, password) =>
    firebase.createUserWithEmailAndPassword(email, password)

  const signInWithEmailAndPassword = (email, password) =>
    firebase.signInWithEmailAndPassword(email, password)

  useEffect(() => {
    firebase.onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        history.push('/welcome', { user: user.email })
      }
    })
  }, [firebase, history])

  return (
    <div>
      <AuthForm
        signInWithEmailAndPassword={signInWithEmailAndPassword}
        createUserWithEmailAndPassword={createUserWithEmailAndPassword}
      />
    </div>
  )
}

export default Auth
