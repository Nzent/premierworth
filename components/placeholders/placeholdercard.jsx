import React from 'react'

export default function Placeholdercard() {
    return (
        <div>
            <div className='bg-white rounded-md shadow-md p-4 w-full h-full'>
                <div className='bg-white flex flex-col justify-center items-center p-2'>
                    <lord-icon
                        src="https://cdn.lordicon.com/hrqwmuhr.json"
                        trigger="hover"
                        colors="primary:#fbbf24,secondary:#121331"
                        style={{ width: '200px', height: '200px' }}>
                    </lord-icon>
                    <span className='text-xl font-bold'>
                        No data found
                    </span>
                </div>
            </div>
        </div>
    )
}
