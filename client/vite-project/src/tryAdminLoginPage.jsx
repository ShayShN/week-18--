import React, { useState } from 'react'
import Layout from '../components/Layout'
import { adminLogin } from '../api/complaintsApi'
import { useNavigate } from 'react-router-dom'

export default function AdminLoginPage({ setToken }) {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        const res = await adminLogin(password)
        if (res.token) {
            setToken(res.token)
            navigate('/admin')
        } else {
            setError(res.error)
        }
    }

    return (
        <Layout title="Admin Login">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    className="border p-2 rounded"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    התחברות
                </button>
                {error && <p className="text-red-600">{error}</p>}
            </form>
        </Layout>
    )
}
