import React from 'react'
import Link from 'next/link'
export default function homebutton({ link, title, icon }) {
    return (
        <div>
            <Link href={'/screen/' + link}>
                <a>
                    <div className='h-32 w-32 backdrop-filter backdrop-blur-lg border border-yellow-400 rounded-md cursor-pointer group hover:bg-yellow-400 hover:bg-opacity-20 duration-300 border-opacity-50'>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <lord-icon
                                src={icon}
                                trigger="morph"
                                colors="primary:#ffffff,secondary:#fbbf24"
                                style={{ width: '100px', height: '100px' }}>
                            </lord-icon>
                            <span className='text-white -m-2 duration-300 group-hover:text-yellow-400 group-hover:opacity-100 opacity-0'>{title}</span>
                        </div>
                    </div>

                </a>
            </Link>
        </div>
    )
}
