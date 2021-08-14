import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";

export async function getServerSideProps(context) {
    const id = context.params.id
    const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/items/gallery/${id}?fields=*.*&filter={ "status": { "_eq": "published" }}`).then(res => (res.data))
    return {
        props: { data }
    }
}

const handleDragStart = (e) => e.preventDefault();


export default function gallery({ data }) {

    return (
        <>
            <section className='mt-16 mb-2'>
                <div className='container max-w-6xl m-auto'>
                    <div className='bg-white rounded-md shadow-md hover:shadow-lg duration-300'>
                        <AliceCarousel
                            animationEasingFunction="ease-in-out"
                            autoHeight
                            infinite
                            autoWidth
                            autoPlay
                            autoPlayInterval={2000}
                            animationDuration={1000}
                            mouseTracking
                            disableButtonsControls
                            items={
                                data.data.images.map((img) => (
                                    <div className='item' key={img.id}>
                                        <Image src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${img.directus_files_id}`} width={1920} height={1080} onDragStart={handleDragStart} role="presentation" className='rounded-t-md' alt={img.title} />
                                    </div>
                                ))
                            }
                        />
                        <div className='p-2 space-y-2'>
                            <div className='text-2xl font-bold'>{data.data.title}</div>
                            <p>{data.data.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
