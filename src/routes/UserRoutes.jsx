import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../components/Register'
import Login from '../components/Login'
import Notes from '../components/Notes'
import Notesedit from '../components/Notesedit'
import Addnotes from '../components/Addnotes'


const UserRoutes = () => {
  return (
   <Routes>
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login />} />
    <Route path='/notes' element={<Notes />} />
    <Route path='/notesedit/:id' element={<Notesedit />} />
    <Route path='/addnotes' element={<Addnotes />} />

    

   </Routes>
  )
}

export default UserRoutes