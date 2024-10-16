"use client"

// import { SendEmail } from '@/lib/action'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const Page = () => {
    const [formData, setFormData] = useState({
        from:"",
        subject:"",
        text:"",
    })

    function changeHandler(e:ChangeEvent<HTMLInputElement>){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function areaChangeHandler(e:ChangeEvent<HTMLTextAreaElement>){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    async function submitHandler(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        // const res = await SendEmail(formData)
        // console.log(res)
        console.log(formData)
    }

    return (
        <div className='xl:mt-28 mt-20 flex justify-center'>
            <div className='xl:w-8/12 w-full flex flex-col gap-2 justify-center items-center'>
                <h1 className='xl:text-8xl text-6xl font-extrabold tracking-tighter text-center'>CONTACT ME </h1>
                <form onSubmit={submitHandler} className='flex flex-col gap-3 xl:p-10 p-4 pb-32 text-white xl:w-7/12 w-full'>
                    <input className='bg-black rounded-xl border-neutral-700 border p-2 placeholder:text-neutral-500 focus:outline-dashed outline-white' type="text" name='from' placeholder='johndoe@example.com' value={formData.from} onChange={changeHandler}/>
                    <input className='bg-black rounded-xl border-neutral-700 border p-2 placeholder:text-neutral-500 focus:outline-dashed outline-white' type="text" name='subject' placeholder='Subject' value={formData.subject} onChange={changeHandler}/>
                    <textarea className='bg-black rounded-xl border-neutral-700 border p-2 placeholder:text-neutral-500 focus:outline-dashed outline-white min-h-40' name='text' placeholder='Tell me about you...' value={formData.text} onChange={areaChangeHandler}/>
                    <button className="rounded-xl bg-neutral-700 text-neutral-100 py-2 px-4 hover:bg-neutral-200 hover:text-neutral-900 font-bold duration-200 ease-in" type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Page
