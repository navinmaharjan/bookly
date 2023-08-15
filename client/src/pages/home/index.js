import React from 'react'
import { useRouter } from 'next/router'
function index() {
    const router = useRouter()
    return (
        <>
            <div className='bg-blue-900 py-4'>
                <div className='container mx-auto flex justify-between items-center'>
                    <div>
                        <h1 className='tracking-wider text-white'>Bookly</h1>
                    </div>

                    {/* <div>
                        <input type='text' placeholder='Search' className='w-80'></input>
                    </div> */}
                    <div className='flex gap-10'>
                        <button className='text-white'>List your Property</button>
                        <button className='text-white' onClick={()=>router.push('./register')}>Register</button>
                        <button className='text-white' onClick={()=>router.push('./login')}>Sign In</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default index