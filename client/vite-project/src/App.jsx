import { useState } from 'react'
import HomePage from './pages/HomePage'
import AdminLoginPage from './pages/AdminLoginPage'
import SubmitComplaintPage from './pages/SubmitComplaintPage'
import AdminComplaintsPage from './pages/AdminComplaintsPage'
import { BrowserRouter, Route, Routes } from "react-router"



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/admin/login' element={<AdminLoginPage />}></Route>
        <Route path='/api/complaints' element={<SubmitComplaintPage/>}></Route>
        <Route path='/api/complaint' element={<AdminComplaintsPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
