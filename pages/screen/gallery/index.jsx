import React from 'react'
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'
import Placeholdercard from '../../../components/placeholders/placeholdercard'



export async function getStaticProps() {
    const gallery = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/items/gallery?fields=*.*&filter={ "status": { "_eq": "published" }}`).then(res => (res.data))

    return {
        props: { gallery }
    }
}

export default function index({ gallery }) {
    return (
        <>

            <section className='mt-16 mb-2'>
                <div className='container max-w-6xl m-auto'>
                    <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                        {gallery.data.length === 0 ? <Placeholdercard />
                            :
                            <>
                                {
                                    gallery.data.map(gallery => (
                                        <Link href="/screen/gallery/[id]" as={`/screen/gallery/${gallery.id}`}>
                                            <div className='bg-white rounded-md p-1' key={gallery.id}>
                                                <Image src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${gallery.images[0].directus_files_id}`} width={420} height={280} layout='responsive' className='rounded-md shadow-md hover:shadow-lg duration-300 cursor-pointer' />
                                            </div>
                                        </Link>
                                    ))
                                }
                            </>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}