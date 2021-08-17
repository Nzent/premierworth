// import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import useDataFetch from '../../../components/fetch'

export default function index() {
    const { data, isLoading, isError } = useDataFetch("items/pagedata?filter[status][_eq]=published")
    
    const { data:mdata, isLoading:mdataL, isError:mdataE } = useDataFetch("items/members?filter[status][_eq]=published")

    
    if (isError) return (<div>Error</div>)
    if (isLoading) return (<div>Error</div>)

    if (mdataE) return (<div>Error</div>)
    if (mdataL) return (<div>Error</div>)

    return (
        <>
            <section className='mt-16 m-2'>
                <div className='container max-w-6xl m-auto'>
                    {isLoading ? <div>Loading</div> :
                        <>
                            <div>
                                <Image src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${data.data[0].about_image}`} width={1920} height={1080} layout='responsive' className='rounded-t-md' alt={data.data[0].website_name} />
                            </div>
                            <div className='bg-white rounded-b-md p-2 text-center shadow-md'>
                                <div className='my-2'>
                                    <div className='text-2xl md:text-4xl text-yellow-400'>{data.data[0].website_name}</div>
                                </div>
                                <div className='my-2'>
                                    <span className='text-xl font-bold'> About us </span>
                                    <br />
                                    <p>{data.data[0].about_website}</p>
                                </div>
                                <div className='my-2'>
                                    <span className='text-xl font-bold'> Motivation </span>
                                    <br />
                                    <p>{data.data[0].motivation}</p>
                                </div>
                                <div className='my-2'>
                                    <span className='text-xl font-bold'> Location </span>
                                    <br />
                                    <iframe src={data.data[0].location_src} className='w-full h-80 rounded-md border border-gray-400 border-opacity-50' allowFullScreen={true} loading="lazy"></iframe>
                                </div>
                                <div className='mt-2'>
                                    <span className='text-xl font-bold'> Contacts </span>
                                    <br />
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                        <div className='bg-gray-200 rounded-md h-20 flex justify-center items-center'>{data.data[0].contacts}</div>
                                        <div className='bg-gray-200 rounded-md h-20 flex justify-center items-center'>{data.data[0].contact_whatsapp}</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    {/* Members */}
                    <div className='mx-auto my-2 text-xl font-bold bg-white shadow-md rounded-md flex justify-center'>
                        <h1>Members</h1>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-2  mt-2'>
                        {mdata.data.map(member => (
                            <div className='bg-white p-2 rounded-md shadow-md text-center space-y-2' key={member.id}>
                                <div>
                                    <Image src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${member.avatar}`} width={200} height={200}
                                        className='rounded-full shadow-md m-2' alt={member.name} />
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
