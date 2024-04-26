import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
import './index.css'
import Body from './Body'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Body/>
  </React.StrictMode>,
)
