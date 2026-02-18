import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SubmitComplaintPage from './pages/SubmitComplaintPage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminComplaintsPage from './pages/AdminComplaintsPage'
import ProtectedRoute from './components/ProtectedRoute'
import './styles/app.css'

function App() {
    const [token, setToken] = useState('')

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/submit" element={<SubmitComplaintPage />} />
                <Route path="/admin/login" element={<AdminLoginPage setToken={setToken} />} />
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute token={token}>
                            <AdminComplaintsPage token={token} />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
