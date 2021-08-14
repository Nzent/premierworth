import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
export default function Navbar() {
    const router = useRouter()


    return (
        <>
            {router.pathname === '/' ? null :
                <nav className='p-4 bg-white shadow-md rounded-b-md fixed top-0 z-20 w-full'>
                    <div className='max-w-6xl mx-auto flex justify-between'>
                        {/* Left */}
                        <div className='font-extrabold'><Link href='/'><a className='hover:text-yellow-400 duration-300'>PWE</a></Link></div>
                        {/* Right */}
                        <div className='space-x-2 md:space-x-4'>
                            <Link href='/screen/houseplans'><a className='hover:border-yellow-400 duration-300 border-b-2'>
                                {router.pathname==='/screen/houseplans'?<span className='text-yellow-400 font-bold'>Plans</span>:<span>Plans</span>}</a></Link>
                            <Link href='/screen/3dvisual'><a className='hover:border-yellow-400 duration-300 border-b-2'>{router.pathname==='/screen/3dvisual'?<span className='text-yellow-400 font-bold'>3D</span>:<span>3D</span>}</a></Link>
                            <Link href='/screen/consultant'><a className='hover:border-yellow-400 duration-300 border-b-2'>{router.pathname==='/screen/consultant'?<span className='text-yellow-400 font-bold'>Consultant</span>:<span>Consultant</span>}</a></Link>
                            <Link href='/screen/gallery'><a className='hover:border-yellow-400 duration-300 border-b-2'>{router.pathname==='/screen/gallery'?<span className='text-yellow-400 font-bold'>Gallery</span>:<span>Gallery</span>}</a></Link>
                            <Link href='/screen/about'><a className='hover:border-yellow-400 duration-300 border-b-2'>{router.pathname==='/screen/about'?<span className='text-yellow-400 font-bold'>About</span>:<span>About</span>}</a></Link>
                        </div>
                    </div>
                </nav>
            }
        </>
    )
}
