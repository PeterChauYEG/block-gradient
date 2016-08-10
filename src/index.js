import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// import styles
import './index.css'

// import components
import App from './App'

// import store
import store from './imports/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
