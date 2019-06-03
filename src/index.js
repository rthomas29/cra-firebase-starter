import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Welcome from './components/Welcome'
import * as serviceWorker from './serviceWorker'
import Firebase, { FirebaseContext, firebaseConfig } from './firebase/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'firebase/auth'
import Auth from './components/Auth'

const NoMatch = () => <h1>404 Not Found</h1>

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase(firebaseConfig)}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/auth" component={Auth} />
        <Route path="/welcome" component={Welcome} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </FirebaseContext.Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
