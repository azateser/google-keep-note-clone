import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/styles/reset.css'
import './assets/styles/global.css'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
