import { useEffect } from 'react'

function fetchFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem([key]))
}

function useAuthRouting(history) {
  useEffect(() => {
    const user = fetchFromLocalStorage('user')
    if (user !== null) {
      history.push('/welcome', { user: user.email })
    } else {
      history.push('/auth')
    }
  }, [history])
}

function App({ history }) {
  useAuthRouting(history)
  return null
}

export default App
