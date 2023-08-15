import React from 'react'
import { useSelector } from 'react-redux'
function index() {

    const { userDetails } = useSelector(state => state.user)
    return (
        <>
            <div className='bg-blue-900'>
                <div className=' container mx-auto h-14 flex items-center text-white text-xl font-semibold'>
                    <h1 className='tracking-wider'>Bookly</h1>
                </div>

            </div>
        </>
    )
}

export default index