import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Content from './components/layout/Content';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Content />
      </Router>
    </div>
  )
}

export default App