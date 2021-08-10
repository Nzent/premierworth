import Image from 'next/image'
import axios from 'axios'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import ReactShowMoreText from 'react-show-more-text';


export async function getStaticPaths() {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/items/houseplans`).then(res => (res.data))
    const paths = res.data.map(plan => {
        return {
            params: { id: plan.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id
    const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/items/houseplans/${id}?fields=*.*`).then(res => (res.data))
    return {
        props: { data }
    }
}

export default function houseplans({ data }) {

    const handleDragStart = (e) => e.preventDefault();

    const plan = data.data
    return (
        <>
            <section className='mt-16 mb-2'>
                <div className='container max-w-6xl m-auto'>
                    <div>
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
                                    plan.images.map((img) => (
                                        <div className='item'>
                                            <Image src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${img.directus_files_id}`} width={1920} height={1080} onDragStart={handleDragStart} role="presentation" className='rounded-t-md' />
                                        </div>
                                    ))
                                }
                            />

                            <div className='p-2'>
                                <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                                    <div>Area : <span className='font-bold'>{plan.area}</span></div>
                                    <div>Beds : <span className='font-bold'>{plan.beds}</span></div>
                                    <div>Bath : <span className='font-bold'>{plan.baths}</span></div>
                                    <div>Garage : <span className='font-bold'>{plan.garage}</span></div>
                                    <div>Story : <span className='font-bold'>{plan.story}</span></div>
                                </div>
                                <div className='my-2'>
                                    <div>Description : <div>
                                        <ReactShowMoreText
                                            lines={3}
                                            more={<span className='text-gray-600 italic uppercase'>More</span>}
                                            less={<span className='text-gray-600 italic uppercase'>Less</span>}
                                            className="content-css duration-300"
                                            expanded={false}
                                            width={280}
                                            truncatedEndingComponent={"..."}
                                        >
                                            {plan.description}
                                        </ReactShowMoreText>
                                    </div></div>
                                </div>
                                <hr />
                            </div>
                            <div className='flex justify-between items-baseline'>
                                <div className='mt-2 text-center md:text-right ml-2'>Rs. <span className='font-bold text-2xl text-black'>{plan.price}</span></div>

                                <div className='flex items-center'>
                                    {/* Fav */}
                                    <div>
                                        <button className='px-2 py-1 bg-yellow-400 rounded-tl-md border-r border-black hover:bg-yellow-300 duration-300'>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/mdgrhyca.json"
                                                trigger="morph"
                                                colors="primary:#121331,secondary:#ffffff"
                                                style={{ width: '30px', height: '30px' }}>
                                            </lord-icon>
                                            Favorite </button>
                                    </div>
                                    {/* Buy now */}
                                    <div>
                                        <button className='px-2 py-1 bg-yellow-400 rounded-br-md hover:bg-yellow-300 duration-300'>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/dnoiydox.json"
                                                trigger="morph"
                                                colors="primary:#121331,secondary:#ffffff"
                                                style={{ width: '30px', height: '30px' }}>
                                            </lord-icon>
                                            Buy Now </button>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

