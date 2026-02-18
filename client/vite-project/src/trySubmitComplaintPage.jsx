import React, { useState } from 'react'
import Layout from '../components/Layout'
import { submitComplaint } from '../api/complaintsApi'
import { useNavigate } from 'react-router-dom'

export default function SubmitComplaintPage() {
    const [category, setCategory] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        const res = await submitComplaint({ category, message })
        if (res.complaint) {
            setSuccess('תלונה נשלחה בהצלחה!')
            setCategory('')
            setMessage('')
            setTimeout(() => navigate('/'), 1500)
        }
    }

    return (
        <Layout title="שליחת תלונה אנונימית">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    required
                    className="border p-2 rounded"
                >
                    <option value="">בחר קטגוריה</option>
                    <option value="אוכל">אוכל</option>
                    <option value="ציוד">ציוד</option>
                    <option value="פקודות">פקודות</option>
                    <option value="אחר">אחר</option>
                </select>
                <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="תוכן התלונה"
                    required
                    className="border p-2 rounded h-32"
                />
                <button type="submit" className="bg-green-400 text-white px-4 py-2 rounded">
                    שליחה
                </button>
                {success && <p className="text-green-600">{success}</p>}
            </form>
        </Layout>
    )
}
