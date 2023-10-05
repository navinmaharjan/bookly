import React from 'react'
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <div className='border-b border-gray-200'>
        <div className='container'>
          <div className='flex justify-between items-center py-4'>
            <div className='flex text-blue font-semibold gap-1 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="red" className="w-8 h-8 -rotate-45">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              <h1 className='text-2xl'>Bookly</h1>
            </div>

            <div className='flex gap-4 items-center border border-gray-300 py-2 px-6 rounded-full shadow-md shadow-gray-200'>
              <div className='border-r  text-gray-500 px-20'>Where</div>
              <div className='border-r text-gray-500 px-20'>When</div>
              <div className='text-gray-500 px-20'>Guests</div>
              <div className='w-8 h-8 bg-red flex justify-center items-center rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
            </div>



            <div class="hs-dropdown relative inline-flex">
              <button id="hs-dropdown-slideup-animation" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md  font-medium bg-white text-gray-700 shadow-sm align-middle">

                <div className='flex border py-2 px-4 gap-2 rounded-full items-center cursor-pointer transition-shadow duration-300 hover:shadow-md shadow-gray-200'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  </div>
                  <div className='w-8 h-8 bg-red rounded-full flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                </div>
              </button>

              <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-72 transition-[opacity,margin] duration opacity-0 hidden z-10  duration-300 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2" aria-labelledby="hs-dropdown-slideup-animation">
                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 cursor-pointer" onClick={() => router.push("./register")}>
                  Sign Up
                </a>
                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 cursor-pointer" onClick={() => router.push("./login")}>
                  Login
                </a>
                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 cursor-pointer">
                  Add/Manage Your Property
                </a>
                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 cursor-pointer">
                  Help Center
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header