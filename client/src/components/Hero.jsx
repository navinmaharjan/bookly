import Image from 'next/image'
import React from 'react'
import { useRouter } from "next/router";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Hero = () => {
    const router = useRouter();

    return (
        <>
            <div className=' h-[700px] text-white flex justify-center items-center overflow-hidden relative'>

                <div className="bg-blue absolute top-0 left-0 py-2 w-full z-30 ">

                    <div className="container mx-auto flex justify-between items-center">
                        <div>
                            <h1 className="tracking-wider text-white">Bookly</h1>
                        </div>
                        <div className="flex items-center gap-10">
                            <div
                                onClick={() => router.push("../owner/ownerregister")}
                            >
                                <button className="text-white tracking-wide">Add your Property</button>
                            </div>

                            <div
                               onClick={() => router.push("./login")}
                            >
                                <button className="text-white tracking-wide">Sign In/Register</button>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='absolute w-full h-[700px] bg-black opacity-50 z-20'></div>
                <div className='pt-48'>

                    {/* <video autoPlay muted loop className="video object-cover w-screen h-screen"> <source src="/banner.mp4" type="video/mp4" /> </video> */}
                    <Image src='/bannerImage.jpg' width={2000} height={500} alt="image" className='animate-upscal' />
                </div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] flex justify-center flex-col text-center z-30'>
                    <h1 className='uppercase text-7xl font-bold'>Make your <span className="text-[#FFC436]">stay </span> experience delightful</h1>
                    <p className='text-gray-300 text-base pt-2 font-thin'>Explore top rated hotels, stay house  or apartments from Nepal </p>
                    <div className='w-[1200px] mt-16 rounded-xl flex bg-white mx-auto overflow-hidden'>
                        <div className='w-2/4 text-gray-900 border-e flex items-center'>
                            <input type='text' placeholder='Where' className='w-full h-12 ps-4  border-0  focus:outline-none' />
                            <LocationOnIcon className='text-[#FFC436]' />
                        </div>
                        <div className='w-2/4 text-gray-900 border-e flex items-center'>
                            <input type='text' placeholder='When' className='w-full h-12 ps-4 border-0  focus:outline-none' />
                            <CalendarMonthIcon className='text-[#FFC436]' />
                        </div>
                        <div className='w-2/4 text-gray-900 border-e flex items-center'>
                            <input type='text' placeholder='Guests' className='w-full h-12 ps-4 border-0  focus:outline-none' />
                            <ExpandMoreIcon className='text-[#FFC436]' />
                        </div>
                        <div className='w-1/4 text-gray-900 bg-[#FFC436]'>
                            <button className='h-12 text-gray-900 font-semibold'>Search</button>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Hero