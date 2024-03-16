import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from './app/pages/auth/Login'
import SignUp from './app/pages/auth/SignUp'
export const App = () => {
  return (
    <main className="overflow-x-hidden">
     <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
     </Routes>
    </main>
  )
}
