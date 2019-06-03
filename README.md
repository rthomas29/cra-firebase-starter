## CRA-Firebase-Starter

React app starter with email/password Firebase Authentication

### Tools:

1. create-react-app
2. Firebase Authentication
3. Prettier

### Usage

1. Create a Firebase project if you haven't already.
2. Create a `.env` file and add your Firebase project credentials to `firebaseConfig` in `firebase/index.js.

> Note: Make sure to prepend `REACT_APP_` to any .env variables you create. This is a create-react-app convention. Read more about it here: https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables

Here's what your firebaseConfig may end up looking like

```javascript
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}
```

3. Run `yarn start` to start the development server.
