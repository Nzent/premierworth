import Image from 'next/image'
import Link from 'next/link'
import Placeholdercard from '../../../components/placeholders/placeholdercard'
import useDataFetch from '../../../components/fetch'


export default function houseplans() {

    const { data, isLoading, isError } = useDataFetch(`items/houseplans?fields=*.*&filter[status][_eq]=published`)

    if (isLoading) return (<div>Loading ... </div>)
    if (isError) return (<div>Error</div>)
    const plans = data

    return (
        <>
            <section className='mt-16 mb-2'>
                <div className='container max-w-6xl m-auto'>
                    <div className="grid gap-2 grid-cols-1 md:grid-cols-4 m-2">
                        {plans.data.length === 0 ? <Placeholdercard />
                            :
                            <>
                                {plans.data.map((plan) => (
                                    <Link Link href='/screen/houseplans/[id]' as={`/screen/houseplans/${plan.id}`} key={plan.id}>
                                        <a>
                                            <div className='bg-white rounded-md shadow-md hover:shadow-lg duration-300'>
                                                <Image src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${plan.images[0].directus_files_id}`} width={420} height={280} className='rounded-t-md shadow-md' alt={plan.title} />
                                                <div className='p-2'>
                                                    <div className='text-xl font-bold pb-2'>{plan.title}</div>
                                                    <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                                                        <div className='  whitespace-nowrap overflow-hidden'>Area : <span className='font-bold'>{plan.area}</span></div>
                                                        <div className=' whitespace-nowrap overflow-hidden'>Beds : <span className='font-bold' >{plan.beds}</span></div>
                                                        <div className='  whitespace-nowrap overflow-hidden'>Bath : <span className='font-bold'>{plan.baths}</span></div>
                                                        <div className='  whitespace-nowrap overflow-hidden'>Garage : <span className='font-bold'>{plan.garage}</span></div>
                                                        <div className='  whitespace-nowrap overflow-hidden'>Story : <span className='font-bold'>{plan.story}</span></div>
                                                    </div>
                                                    <hr />
                                                    <div className='mt-2 text-center md:text-right'>Rs. <span className='font-bold text-2xl text-gray-500'>{plan.price}</span></div>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                ))}
                            </>}
                    </div>
                </div>
            </section>
        </>
    )
}

