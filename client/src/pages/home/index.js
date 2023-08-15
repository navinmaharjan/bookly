import React, {useState} from 'react'
import {handleLogOut} from '../../redux/reducerSlice/userSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'


function index() {
    const[openProfile, setOpenProfile]=useState(false)
    const handleOpenProfile =()=>{
        setOpenProfile(!openProfile)
    }
    const {userDetails} = useSelector(state => state.user)
    const dispatch = useDispatch()

    const router = useRouter()

  return (
    <>
        <div className='bg-blue-500 py-2'>
            <div className='container mx-auto text-xl font-semibold text-white flex justify-between items-center'>
                <h3>Bookly</h3>
               
                <div className='w-12 h-12 rounded-full bg-blue-300 flex justify-center items-center relative cursor-pointer' onClick={handleOpenProfile}>
                    <h1>{userDetails.firstName}</h1>
                </div>
                {openProfile && (
                    <div className='w-40 border-2 absolute top-16 right-32 rounded-lg bg-blue-300 p-2'>
                        <ul>
                            <li className='hover:bg-blue-600 cursor-pointer'> <button onClick={() => router.push('/profile')}>Profile</button></li>
                            <li className='hover:bg-blue-600 cursor-pointer'> <button onClick={() =>dispatch(handleLogOut())} >Log Out</button></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
        
    </>
    
  )
}

export default index