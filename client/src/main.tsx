import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import App from './App'
import './init'
import VideoState from './context/VideoState'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <VideoState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </VideoState>
  </React.StrictMode>,
  document.getElementById('root')
)
