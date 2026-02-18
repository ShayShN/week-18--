import React from 'react'
import Layout from '../components/Layout'


const fakeData = [
    {
        category: "food1",
        message: "ggggggggggg",
        createdAt: "2026-02-18T08:08:53.125Z"
    },
    {
        category: "food1",
        message: "ggggggggggg",
        createdAt: "2026-02-18T08:28:03.562Z"
    }
]

export default function AdminComplaintsPage() {
    return (

        <div>
            <header>Admin Complaints Page</header>
            <section className='flex flex-col items-center w-full p-6'>
                <h1 className='text-2xl font-bold mb-6'>List Of Fid</h1>
                <table className='table-fixed'>
                    <caption>
                        Front-end web developer course 2021
                    </caption>
                    <thead>
                        <tr className='items-center'>
                            <th className="px-6 py-4" scope="col">category</th>
                            <th className="px-6 py-4" scope="col">message</th>
                            <th className="px-6 py-4" scope="col">createdAt</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {fakeData.map((item, index) => (
                            <tr key={index}>
                                <th className="px-6 py-4 font-medium text-gray-800" scope="row">{item.category}</th>
                                <td className="px-6 py-4 font-medium text-gray-800">{item.message}</td>
                                <td className="px-6 py-4 font-medium text-gray-800">{item.createdAt}</td>
                            </tr>
                        )

                        )}
                    </tbody>
                </table>
            </section>
        </div>



    )
}
