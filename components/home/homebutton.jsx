import React from 'react'
import Link from 'next/link'
export default function Homebutton({ link, title, icon }) {
    return (
        <div>
            <Link href={'/screen/' + link}>
                <a>
                    <div className='md:h-32 md:w-32 px-4 py-2 md:px-1 md:py-1 border 
                    border-yellow-400 rounded-md cursor-pointer group hover:bg-yellow-400 
                    hover:bg-opacity-20 duration-300 border-opacity-50
                    bg-black bg-opacity-20'>

                        <div className='flex md:flex-col space-x-2 justify-center items-center h-full'>
                            <div className='hidden md:flex'>
                                <lord-icon
                                    src={icon}
                                    trigger="morph"
                                    colors="primary:#ffffff,secondary:#fbbf24"
                                    style={{ width: '100px', height: '100px' }}
                                    stroke='30'
                                    >
                                </lord-icon>
                            </div>
                            <div className='md:hidden'>
                                <lord-icon
                                    src={icon}
                                    trigger="morph"
                                    colors="primary:#ffffff,secondary:#fbbf24"
                                    style={{ width: '30px', height: '30px' }}
                                    stroke='30'
                                    >
                                </lord-icon>
                            </div>
                            <span className='text-white -m-2 duration-300 group-hover:text-white group-hover:opacity-100 opacity-0 md:flex hidden'>{title}</span>
                            <span className='text-yellow-400 duration-300 md:hidden'>{title}</span>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}
