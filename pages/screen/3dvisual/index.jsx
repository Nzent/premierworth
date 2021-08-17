import ReactShowMoreText from 'react-show-more-text'
import useDataFetch from '../../../components/fetch'
import Placeholdercard from '../../../components/placeholders/placeholdercard'


export default function houseplans() {
    const { data, isLoading, isError } = useDataFetch("items/visual?filter[status][_eq]=published")

    if (isError) return (<div>Error</div>)
    if (isLoading) return (<div>Error</div>)
    const visuals = data

    return (
        <>
            <section className='mt-16 mb-2 m-2'>
                <div className='container max-w-6xl m-auto '>
                    <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                        {visuals.data.length === 0 ? <Placeholdercard />
                            :
                            <>
                                {visuals.data.map((visual) => (
                                    <div className='bg-white rounded-md shadow-md hover:shadow-lg duration-300 cursor-pointer' key={visual.id}>
                                        <video controls disablePictureInPicture controlsList='nodownload' className='rounded-t-md'>
                                            <source src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${visual.video}`} />
                                        </video>
                                        <div className='p-2'>
                                            <div className='text-xl font-bold'>{visual.title}</div>
                                            <div>
                                                <ReactShowMoreText
                                                    lines={1}
                                                    more={<span className='text-gray-600 italic uppercase'>More</span>}
                                                    less={<span className='text-gray-600 italic uppercase'>Less</span>}
                                                    className="content-css duration-300"
                                                    expanded={false}
                                                    width={280}
                                                    truncatedEndingComponent={"..."}
                                                >
                                                    {visual.description}
                                                </ReactShowMoreText>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>}
                    </div>
                </div>
            </section>
        </>
    )
}

