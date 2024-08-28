import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthRoutes from './pages/auth/AuthRoutes.jsx'
import Dashboard from './layout/Dashboard.jsx'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/*' element={<AuthRoutes />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>

    </>
  )
}

export default App