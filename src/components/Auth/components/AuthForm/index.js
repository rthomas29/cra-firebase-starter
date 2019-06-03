import React, { useState } from 'react'
import FormFooter from './components/FormFooter'

export default function AuthForm({
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showSignIn, toggleShowSignIn] = useState(true)
  const [authenticationError, setAuthenticationError] = useState(false)

  const setFormValues = showSignIn => {
    if (showSignIn) {
      return [
        signInWithEmailAndPassword,
        'Sign In',
        'Sign In',
        "Don't have an account?",
        'Sign up'
      ]
    } else {
      return [
        createUserWithEmailAndPassword,
        'Sign Up',
        'Sign Up',
        'Already have an account?',
        'Sign in'
      ]
    }
  }
  const [
    handleFormSubmit,
    submitButtonText,
    footerHeader,
    footerText,
    footerButtonText
  ] = setFormValues(showSignIn)

  const onSubmit = async (e, email, password) => {
    e.preventDefault()
    try {
      await handleFormSubmit(email, password)
    } catch (error) {
      setAuthenticationError(error.message)
    }
  }

  return (
    <div className="container-fluid">
      <h2>{footerHeader}</h2>
      <form onSubmit={e => onSubmit(e, email, password)}>
        <div className="form-group">
          <label htmlFor="emailInput">Email</label>
          <input
            className="form-control"
            type="text"
            value={email}
            name="email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input
            className="form-control"
            type="text"
            value={password}
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {submitButtonText}
        </button>
        <FormFooter
          showSignIn={showSignIn}
          toggleShowSignIn={toggleShowSignIn}
          footerText={footerText}
          footerButtonText={footerButtonText}
        />
      </form>
      {authenticationError && <h4>Error: {authenticationError} </h4>}
    </div>
  )
}
