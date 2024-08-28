import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthRoutes from './pages/auth/AuthRoutes.jsx'
import Dashboard from './layout/Dashboard.jsx'
import NotFound from './NotFound.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/*' element={<AuthRoutes />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='/not-found' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App