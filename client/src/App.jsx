import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import AuthRoutes from './pages/auth/AuthRoutes.jsx'
import Dashboard from './layout/Dashboard.jsx'
import { clearStorageOnTokenExpiry } from './helpers/token.js'

function App() {
  const logout = useNavigate();
  
  useEffect(() => {
    const response = clearStorageOnTokenExpiry();

    if (response && response.route) {
      logout(response.route, { replace: true });
    }
  }, [logout]);

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