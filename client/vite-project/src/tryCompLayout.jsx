import React from 'react'

export default function Layout({ title, children }) {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start p-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
                <h1 className="text-2xl font-bold text-center mb-4">{title}</h1>
                {children}
            </div>
        </div>
    )
}
