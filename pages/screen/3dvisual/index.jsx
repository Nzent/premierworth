import axios from 'axios'
import ReactShowMoreText from 'react-show-more-text'


export async function getStaticProps() {
    const visuals = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/items/visual?fields=*.*`).then(res => (res.data))
    return {
        props: { visuals }
    }
}

export default function houseplans({ visuals }) {
    return (
        <>
            <section className='mt-16 mb-2'>
                <div className='container max-w-6xl m-auto'>
                    <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                        {visuals.data.map((visual) => (
                            <div className='bg-white rounded-md shadow-md hover:shadow-lg duration-300 cursor-pointer' key={visual.id}>
                                <video controls disablePictureInPicture controlsList='nodownload' className='rounded-t-md'>
                                    <source src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${visual.video.filename_disk}`} />
                                </video>
                                <div className='p-2'>
                                    <p>
                                        <ReactShowMoreText
                                            lines={3}
                                            more={<span className='text-gray-600 italic uppercase'>More</span>}
                                            less={<span className='text-gray-600 italic uppercase'>Less</span>}
                                            className="content-css duration-300"
                                            expanded={false}
                                            width={280}
                                            truncatedEndingComponent={"..."}
                                        >
                                            {visual.description}
                                        </ReactShowMoreText>

                                    </p>
                                    {/* <hr /> 
                                     <div className='mt-2 text-center md:text-right'>Rs. <span className='font-bold text-2xl text-gray-500'>{plan.price}</span></div> */}

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

