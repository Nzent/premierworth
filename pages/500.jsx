export default function Custom500() {
    return (
        <>
            <section className='h-screen w-full bg-bgerror relative'>

                <div className='bg-black bg-opacity-60 h-screen w-full absolute'></div>
                <div className="flex justify-center items-center w-full h-screen">
                    <div className='absolute text-white text-4xl'>500 - Internal server error</div>
                    <div className='absolute text-white text-2xl mt-32'>
                        <div>Try again in few moment</div>
                    </div>
                </div>
            </section>
        </>
    )
}