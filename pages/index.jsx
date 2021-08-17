import Head from 'next/head'
import useDataFetch from '../components/fetch'
import HomeButton from '../components/home/homebutton'

export default function Home() {
  const { data, isLoading, isError } = useDataFetch('items/pagedata?fields=website_name')

  if (isLoading) return (<div>Loading ... </div>)
  if (isError) return (<div>Error</div>)

  return (
    <>
      <Head>
        <title>{data.data[0].website_name}</title>
        <meta name="description" content={data.data[0].about_website} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className='h-screen w-full bg-bgimage relative'>
        <div className='container'>
          <div className='h-screen w-full bg-black bg-opacity-80 absolute'></div>
          <div className='h-screen w-full fixed z-10'>
            <div className='flex flex-col justify-center items-center h-full'>
              <h1 className='text-center text-5xl md:text-6xl font-light text-yellow-400'>{data.data[0].website_name}</h1>
              <div className='grid grid-cols-1 md:grid-cols-5 gap-2 mt-4'>
                <HomeButton link='houseplans' title='House plans' icon="https://cdn.lordicon.com/gmzxduhd.json" />
                <HomeButton link='3dvisual' title='3D Visual' icon="https://cdn.lordicon.com/ijznovhy.json" />
                <HomeButton link='consultant' title='Consultant' icon="https://cdn.lordicon.com/zpxybbhl.json" />
                <HomeButton link='portfolios' title='Portfolios' icon="https://cdn.lordicon.com/wxnxiano.json" />
                <HomeButton link='about' title='About' icon="https://cdn.lordicon.com/nocovwne.json" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
