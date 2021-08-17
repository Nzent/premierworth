import Link from 'next/link'
export default function Custom404() {
  return (
    <>
      <section className='h-screen w-full bg-bgerror relative'>

        <div className='bg-black bg-opacity-60 h-screen w-full absolute'></div>
        <div className="flex justify-center items-center w-full h-screen">
          <div className='absolute text-white text-4xl'>503 - Server under maintain</div>
          <div className='absolute text-white text-4xl'>Try again in few minutes</div>
        </div>
      </section>
    </>
  )
}