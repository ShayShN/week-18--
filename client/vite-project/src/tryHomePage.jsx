import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <Layout title="תיבת תלונות אנונימית בבסיס צבאי">
            <p className="mb-4 text-center">שלחו תלונה אנונימית ונשוחח</p>
            <div className="flex flex-col gap-4">
                <Link to="/submit" className="bg-green-400 text-white px-4 py-2 rounded text-center">
                    שליחת תלונה
                </Link>
                <Link to="/admin/login" className="bg-blue-500 text-white px-4 py-2 rounded text-center">
                    כניסה לאדמין
                </Link>
            </div>
        </Layout>
    )
}
