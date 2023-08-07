import React from 'react'
import Home from '../../pages/home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HowToRegSharpIcon from '@mui/icons-material/HowToRegSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

function index() {
    return (
        <>
            <div className='bg-blue-900 sticky top-0 left-0 z-30'>
                <div className=' container mx-auto py-4 flex items-center justify-between'>
                    <div className=' text-white text-xl font-semibold'>
                        <h1 className='tracking-wider'>Bookly</h1>
                    </div>
                    
                    <div className='w-4/12 ms-60 flex justify-between items-center bg-white overflow-hidden'>
                        <div className='w-full'>
                            <input className='w-full py-1 ps-2' placeholder='Search' />
                        </div>
                        <SearchSharpIcon  className="bg-white p-1 text-3xl"/>
                    </div>

                    
                    <div className="flex gap-4 items-center">
                        <div className="text-white text-sm font-light pe-2">
                            <button>List Your Property</button>
                        </div>
                        
                        <div className='flex gap-1 items-center'>
                            <HowToRegSharpIcon className='text-3xl text-white' />
                            <p className='text-white font-light text-sm'>Register</p>
                        </div>
                        
                        <div className='flex gap-1 items-center'>
                            <AccountCircleIcon className='text-3xl text-white' />
                            <p className='text-white font-light text-sm'>Sign In</p>
                        </div>

                       
                    </div>


                </div>


            </div>
            <div>
                <Home />
            </div>

        </>
    )
}

export default index