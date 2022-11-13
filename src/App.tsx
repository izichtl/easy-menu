import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import RoutesIndex from './routes'
import './App.css'
function App (): any {
  return (
    <BrowserRouter>
     <AuthProvider>
         <RoutesIndex />
     </AuthProvider>
    </BrowserRouter>
  )
}

export default App
