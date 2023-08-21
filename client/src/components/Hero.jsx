import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'



const Hero = () => {
    
    return (
        <>
            <div className='bg-black h-[700px] text-white flex justify-center items-center overflow-hidden relative'>
                <div className='absolute w-full h-[700px] bg-black opacity-60'></div>
                <div className='pt-[10px]'>
                    <Image src='/banner3.jpg' width={2000} height={500} />
                </div>
                {/* <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] text-center'>
                    <h1 className='uppercase text-6xl font-bold'>Book Unique Experience of Nepal</h1>
                </div> */}
              
            </div>
          
        </>
    )
}

export default Hero