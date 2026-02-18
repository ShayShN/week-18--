import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router'

export default function HomePage() {
    return (
        <div>
            <Layout title={'Home Page'}>
                <div className='flex flex-col h-90 justify-around items-center'>
                    <h1 className='font-bold border-b-2 w-full'>תיבת תלונות אנונימית בבסיס צבאי</h1>
                    <p>שלחו תלונה אנונימית ונשוחח</p>
                    <Link to={"/api/complaints"} className='bg-green-400 cursor-pointer' type='submit'>שליחת תלונה</Link>
                    <div>
                        <Link to={"/admin/login"} className='bg-blue-500 font-black'>כניסה לאדמין</Link>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
