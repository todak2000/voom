import React from 'react'
import './App.css'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import Room from './Room'
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room" element={<Room />} />
    </Routes>
  )
}

export default App
