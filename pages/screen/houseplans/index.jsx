import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'


export async function getStaticProps() {
    const plans = await axios.get(`${process.env.API_URL}/items/houseplans?fields=*.*`).then(res => (res.data))
    return {
        props: { plans }
    }
}

export default function houseplans({ plans }) {
    return (
        <>
            <section className='mt-2'>
                <div className='container max-w-6xl m-auto'>
                    <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
                        {plans.data.map((plan) => (
                            <Link href='/' key={plan.id}>
                                <a>
                                    <div className='bg-white rounded-md shadow-md hover:shadow-lg duration-300'>
                                        <Image src={`http://localhost:8055/assets/${plan.images[0].directus_files_id}`} width={420} height={280} className='rounded-t-md shadow-md' />
                                        <div className='p-2'>
                                            <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                                                <div>Area : <span className='font-bold'>{plan.area}</span></div>
                                                <div>Beds : <span className='font-bold'>{plan.beds}</span></div>
                                                <div>Bath : <span className='font-bold'>{plan.baths}</span></div>
                                                <div>Garage : <span className='font-bold'>{plan.garage}</span></div>
                                                <div>Story : <span className='font-bold'>{plan.story}</span></div>
                                            </div>
                                            <hr />
                                            <div className='mt-2 text-center md:text-right'>Rs. <span className='font-bold text-2xl text-gray-500'>{plan.price}</span></div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

