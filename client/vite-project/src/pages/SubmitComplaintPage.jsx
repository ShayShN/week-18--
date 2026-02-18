import React, { useRef } from 'react'
import Layout from '../components/Layout'
import { createMassege } from '../api/complaintsApi.js'


export default function SubmitComplaintPage() {

    const categoryRef = useRef(null)
    const messageRef = useRef(null)

    async function handleSubmit(e) {
        e.preventDefault();
        const category = categoryRef.current.value;
        const message = messageRef.current.value;
        const result = await createMassege({ category, message })
        console.log(result);

    }

    return (
        <form onSubmit={handleSubmit}>
            <Layout title={"Submit Complaint Page"}>
                <section className='flex flex-col h-90 justify-around items-center'>
                    <h1 className='font-bold border-b-2 w-full'>Send Anunimus Fidbek</h1>

                    <div className='flex flex-col items-center'>
                        <label htmlFor="fid">תחום תלונה</label>
                        <select ref={categoryRef} id="fid">

                            <option value="">Please choose an option</option>
                            <option value="food">food</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="area"></label>
                        <input ref={messageRef}  type="text" name="" id="area" placeholder='enter your vote' />
                    </div>
                    <div>
                        <button type='submit' className='bg-blue-500 font-black'>Send</button>
                    </div>

                </section>
            </Layout>
        </form>
    )
}
