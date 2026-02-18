import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { fetchComplaints } from '../api/complaintsApi'

export default function AdminComplaintsPage({ token }) {
    const [complaints, setComplaints] = useState([])

    useEffect(() => {
        fetchComplaints(token).then(setComplaints)
    }, [token])

    return (
        <Layout title="רשימת תלונות">
            <div className="flex flex-col gap-4">
                {complaints.map((c, idx) => (
                    <div key={idx} className="border p-2 rounded shadow">
                        <p><strong>קטגוריה:</strong> {c.category}</p>
                        <p><strong>תלונה:</strong> {c.message}</p>
                        <p><strong>נשלחה:</strong> {new Date(c.createdAt).toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}
