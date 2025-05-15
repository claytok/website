import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.css'

// Debug info
console.log('LAMPGenie app starting...')
console.log('BASE_URL:', import.meta.env.BASE_URL)

// Mount to DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
