import React from 'react'

export default function Layout({ title, children }) {
    return (

        <div className='flex flex-col font-bold shadow h-100 items-center'>
            <header className='font-bold'>{title}</header>
            <div>
            {children}
            </div>
        </div>

    )
}
