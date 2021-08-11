import Link from 'next/link'
export default function Custom404() {
  return (
    <>
      <section className='h-screen w-full bg-bgerror relative'>

        <div className='bg-black bg-opacity-60 h-screen w-full absolute'></div>
        <div className="flex justify-center items-center w-full h-screen">
          <div className='absolute text-white text-4xl'>404 - Item not found</div>
          <div className='absolute text-white text-2xl mt-40'>
            <Link href='/' passHref>
              <a>
                <button className='border-yellow-400 bg-white bg-opacity-30 hover:bg-yellow-400 border border-opacity-50 px-4 py-1 duration-300 rounded-md'>Back to Home</button>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}