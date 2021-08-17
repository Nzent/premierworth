import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Placeholdercard from '../../../components/placeholders/placeholdercard'
import useDataFetch from '../../../components/fetch'


export default function Index() {
    const { data, isLoading, isError } = useDataFetch(`items/gallery?fields=*.*&filter=[status][_eq]=published`)

    if (isLoading) return (<div>Loading ... </div>)
    if (isError) return (<div>Error</div>)


    const gallery = data


    return (
        <>
            <section className='mt-16 m-2 '>
                <div className='container max-w-6xl m-auto'>
                    <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                        {gallery.data.length === 0 ? <Placeholdercard />
                            :
                            <>
                                {
                                    gallery.data.map(gallery => (
                                        <div key={gallery.id}>
                                            <Link href="/screen/portfolios/[id]" as={`/screen/portfolios/${gallery.id}`}>
                                                <a>
                                                    <div className='bg-white rounded-md p-1' key={gallery.id}>
                                                        <Image src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${gallery.images[0].directus_files_id}`} width={420} height={280} layout='responsive' className='rounded-md shadow-md hover:shadow-lg duration-300 cursor-pointer'
                                                            alt={gallery.title} />
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
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
