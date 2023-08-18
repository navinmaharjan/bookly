import React from 'react'
import { useRouter } from 'next/router'
function index() {
    const router = useRouter()
    return (
        <>
            <div className='bg-green-900 py-4'>
                <div className='container mx-auto flex justify-between items-center'>
                    <div>
                        <h1 className='tracking-wider text-white'>Bookly</h1>
                    </div>

                
                    <div className='flex items-center gap-5'>
                        <div className=' opacity-90 hover:opacity-80 p-2 rounded-md cursor-pointer' onClick={()=>router.push('../owner/ownerregister')}>
                            <button className='text-white'>Add your Property</button>
                        </div>
                    
                        
                        <div className=' opacity-90 hover:opacity-80 p-2 rounded-md cursor-pointer' onClick={()=>router.push('./login')}>
                            <button className='text-white' >Sign In/Register</button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default index