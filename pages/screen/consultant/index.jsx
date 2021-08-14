import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';

export default function Index() {

    const router = useRouter()

    const [res, setRes] = useState(null);

    const schema = yup.object().shape({
        firstname: yup.string().required(),
        lastname: yup.string().required(),
        email: yup.string().email().required(),
        subject: yup.string().max(50).required(),
        consultant: yup.string().max(500).required(),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    async function onSubmit(data) {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/items/consultants`, data)
            .then(res => (res.status === 200 ? setRes(1) : setRes(0)));
        setTimeout(function () {
            setRes(0)
            router.push('/')
        }, 5000);

    }


    return (
        <>
            <section className='mt-16 mb-2 relative m-2'>
                <div className='container max-w-2xl m-auto'>
                    <div className='bg-white shadow-md p-4 rounded-md'>
                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
                            <h1 className='text-center font-bold text-2xl'>Consultant form</h1>
                            {res === 1 ?
                                <div className='w-full p-4 bg-yellow-400 text-center font-bold text-black shadow-md rounded-md duration-300'>
                                    Form Submit successful ! Redirecting ...
                                </div>
                                :
                                null
                            }

                            {/* First name */}
                            <div>
                                <label htmlFor="fname">First name</label>
                                <input {...register("firstname")} id='fname' type='text'
                                    className='border border-opacity-50 border-gray-400 bg-gray-50 rounded-md p-1 focus:outline-none w-full' />
                                <span className='text-red-400'>{errors.firstname?.message}</span>
                            </div>
                            {/* Last name */}
                            <div>
                                <label htmlFor="lname">Last name</label>
                                <input {...register("lastname")} id='lname' type='text'
                                    className='border border-opacity-50 border-gray-400 bg-gray-50 rounded-md p-1 focus:outline-none w-full' />
                                <span className='text-red-400'>{errors.lastname?.message}</span>
                            </div>
                            {/* Email */}
                            <div>
                                <label htmlFor="email">Email</label>
                                <input {...register("email")} id='email' type='email'
                                    className='border border-opacity-50 border-gray-400 bg-gray-50 rounded-md p-1 focus:outline-none w-full' />
                                <span className='text-red-400'>{errors.email?.message}</span>
                            </div>
                            {/* Subject */}
                            <div>
                                <label htmlFor="subject">Subject</label>
                                <input {...register("subject")} id='subject' type='text' maxLength={50}
                                    className='border border-opacity-50 border-gray-400 bg-gray-50 rounded-md p-1 focus:outline-none w-full' />
                                <span className='text-red-400'>{errors.subject?.message}</span>
                            </div>
                            {/* Consult */}
                            <div>
                                <label htmlFor="consultant">Consult in detail</label>
                                <textarea {...register("consultant")} id='consultant' type='textarea' rows={10}
                                    className='border border-opacity-50 border-gray-400 bg-gray-50 rounded-md p-1 focus:outline-none w-full' />
                                <span className='text-red-400'>{errors.consultant?.message}</span>
                            </div>
                            {/* Submit */}
                            <div>
                                <button type='submit' className='px-2 py-1 bg-yellow-400 rounded-md flex items-center justify-center space-x-2'>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/rhvddzym.json"
                                        trigger="hover"
                                        colors="primary:#ffffff secondary:#ffffff"
                                        style={{ width: '30px', height: '30px' }}>
                                    </lord-icon>
                                    <span> Submit</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
