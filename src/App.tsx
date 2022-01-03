import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import './styles.css'
import HomePage from './pages/Homepage'

export const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}
