import axios from 'axios'
import Head from 'next/head'
import HomeButton from '../components/home/homebutton'


export async function getStaticProps() {
  const name = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/items/pagedata?fields=website_name`)
    .then(res => (res.data))
  return {
    props: { name }
  }
}


export default function Home({ name }) {
  return (
    <>
      <Head>
        <title>{name.data[0].website_name}</title>
        <meta name="description" content={name.data[0].website_name} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className='h-screen w-full bg-bgimage relative'>
        <div className='container'>
          <div className='h-screen w-full bg-black bg-opacity-80 absolute'></div>
          <div className='h-screen w-full fixed z-10'>
            <div className='flex flex-col justify-center items-center h-full'>
              <h1 className='text-center text-5xl md:text-6xl font-light text-yellow-400'>{name.data[0].website_name}</h1>
              <div className='grid grid-cols-2 md:grid-cols-5 gap-2 mt-4'>
                <HomeButton link='houseplans' title='House plans' icon="https://cdn.lordicon.com/gmzxduhd.json" />
                <HomeButton link='3dvisual' title='3D Visual' icon="https://cdn.lordicon.com/ijznovhy.json" />
                <HomeButton link='consultant' title='Consultant' icon="https://cdn.lordicon.com/zpxybbhl.json" />
                <HomeButton link='gallery' title='Gallery' icon="https://cdn.lordicon.com/fgkmrslx.json" />
                <HomeButton link='about' title='About' icon="https://cdn.lordicon.com/nocovwne.json" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
