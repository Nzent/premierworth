import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
export default function navbar() {
    const router = useRouter()


    return (
        <>
            {router.pathname === '/' ? null :
                <nav className='p-4 bg-white shadow-md rounded-b-md fixed top-0 z-20 w-full'>
                    <div className='max-w-6xl mx-auto flex justify-between'>
                        {/* Left */}
                        <div className='font-extrabold'><Link href='/'><a className='hover:text-yellow-400 duration-300'>PWE</a></Link></div>
                        {/* Right */}
                        <div className='space-x-4'>
                            <Link href='/screen/houseplans'><a className='hover:border-yellow-400 duration-300 border-b-2'>Plans</a></Link>
                            <Link href='/screen/3dvisual'><a className='hover:border-yellow-400 duration-300 border-b-2'>3D</a></Link>
                            <Link href='/screen/consultant'><a className='hover:border-yellow-400 duration-300 border-b-2'>Consult</a></Link>
                            <Link href='/screen/gallery'><a className='hover:border-yellow-400 duration-300 border-b-2'>Gallery</a></Link>
                            <Link href='/screen/about'><a className='hover:border-yellow-400 duration-300 border-b-2'>About</a></Link>
                        </div>
                    </div>
                </nav>
            }
        </>
    )
}
