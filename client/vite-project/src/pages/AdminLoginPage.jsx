import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router'

export default function AdminLoginPage() {
    return (
        <div>
            <Layout title={"Admin Login Page"}>
                <section className='flex flex-col h-90 justify-around items-center'>
                    <h1 className='font-bold border-b-2 w-full'>Enter to Admin</h1>
                    <div>
                        <label htmlFor="pass">Password:</label>
                        <input className='border' type="password" name="" id="pass" />
                    </div>
                    <div>
                        <Link to={"/api/complaint" } className='bg-blue-500 font-black'>Enter</Link>
                    </div>

                </section>
            </Layout>
        </div>
    )
}
