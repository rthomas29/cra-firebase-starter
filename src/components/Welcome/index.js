import React, { useContext, useEffect } from 'react'
import FirebaseContext from '../../firebase/context'

export default function Welcome({ location, history }) {
  const { user } = location.state
  const firebase = useContext(FirebaseContext)

  const signOut = async () => {
    await firebase.signOut()
  }

  useEffect(() => {
    firebase.onAuthStateChanged(user => {
      if (!user) {
        history.push('/auth')
      }
    })
  }, [firebase, history])

  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <button className="btn btn-danger" onClick={() => signOut()}>Sign out</button>
    </div>
  )
}
