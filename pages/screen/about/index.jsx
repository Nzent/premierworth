import axios from 'axios'
import Image from 'next/image'
import React from 'react'


export async function getStaticProps() {
    const pagedata = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/items/pagedata?filter={ "status": { "_eq": "published" }}`).then(res => (res.data))
    const members = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/items/members?filter={ "status": { "_eq": "published" }}`).then(res => (res.data))
    return {
        props: { pagedata, members }
    }
}



export default function index({ pagedata, members }) {
    const data = pagedata.data[0]
    const memberdata = members.data
    return (
        <>
            <section className='mt-16 mb-2'>
                <div className='container max-w-6xl m-auto'>
                    <div>
                        <Image src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${data.about_image}`} width={1920} height={1080} layout='responsive' className='rounded-t-md' />
                    </div>
                    <div className='bg-white rounded-b-md p-2 text-center shadow-md'>
                        <div className='my-2'>
                            <div className='text-4xl text-yellow-400'>{data.website_name}</div>
                        </div>
                        <div className='my-2'>
                            <span className='text-xl font-bold'> About us </span>
                            <br />
                            <p>{data.about_website}</p>
                        </div>
                        <div className='my-2'>
                            <span className='text-xl font-bold'> Motivation </span>
                            <br />
                            <p>{data.motivation}</p>
                        </div>
                        <div className='my-2'>
                            <span className='text-xl font-bold'> Location </span>
                            <br />
                            <iframe src={data.location_src} className='w-full h-80 rounded-md border border-gray-400 border-opacity-50' allowFullScreen='true' loading="lazy"></iframe>
                        </div>
                        <div className='mt-2'>
                            <span className='text-xl font-bold'> Contacts </span>
                            <br />
                            <div className='grid grid-cols-2 gap-2'>
                                <div className='bg-gray-200 rounded-md h-20 flex justify-center items-center'>{data.contacts}</div>
                                <div className='bg-gray-200 rounded-md h-20 flex justify-center items-center'>{data.contact_whatsapp}</div>
                            </div>
                        </div>
                    </div>

                    {/* Members */}

                    <div className='grid grid-cols-3 gap-2  mt-2'>
                        {memberdata.map(member => (
                            <div className='bg-white p-2 rounded-md shadow-md text-center space-y-2'>
                                <div>
                                    <Image src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${member.avatar}`} width={200} height={200}
                                        className='rounded-full shadow-md m-2' />
                                </div>
                                <div className='italic font-bold'>{member.name}</div>
                                <div className='italic text-gray-500'>{member.profession}</div>
                                <div className='italic font-bold text-gray-600'>{member.institute}</div>
                                <div className=''> - {member.about_memeber} - </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
