import React from 'react'
import Image from 'next/image';
import { useState, useEffect } from 'react';

function index() {
    const [propertyList, setPropertyList] = useState([])

    const fetchAllProperty = async () => {
        const res = await fetch('http://localhost:8080/property')
        const data = await res.json()
        setPropertyList(data.propertyList)
    }

    useEffect(() => {
        fetchAllProperty()
    }, [])

    return (
        <>
            {/* <div className='w-full h-[700px] overflow-hidden relative'>
                <div className='absolute top-0 left-0'>
                    <Image
                        src="/booklybanner.jpg" // The path is relative to the "public" folder
                        alt="My Image"
                        width={1800}
                        height={200}
                    />
                </div>

                <div className='w-full h-[700px] absolute top-0 left-0 bg-black opacity-40 z-10'></div>

                <div className='absolute top-32 right-20 z-20 w-4/12  bg-white rounded-lg p-6 flex flex-col gap-4'>
                    <div className='text-3xl font-semibold'>
                        <h1>Book Unique Experience</h1>
                    </div>

                    <div className='text-lg text-gray-500 w-4/5 mb-4'>
                        <p>Explore top rated tours, hotels, guest house, apartments and restaurants of Nepal</p>
                    </div>

                    <div className='border w-full'>
                        <input type='text' placeholder='Where' className='p-2 w-full'></input>
                    </div>

                    <div className='border w-full'>
                        <input type='text' placeholder='When' className='p-2 w-full'></input>
                    </div>

                    <div className='border w-full'>
                        <input type='text' placeholder='Guests' className='p-2 w-full'></input>
                    </div>

                    <div className='w-full flex justify-end mt-4'>
                        <button className='bg-red-400 text-white px-8 py-2 rounded-lg uppercase font-semibold'>Search</button>
                    </div>
                </div>
            </div> */}

            <div className='container mx-auto text-center py-4 flex justify-center'>
                <h1 className='text-3xl font-semibold border-b pb-4 border-red-400'>Popular Hotel & Accomodations</h1>
            </div>
            <div>
                {
                    propertyList.length > 0 ? (
                        <div className='container mx-auto flex gap-5 w-4/5 flex-wrap'>
                            {propertyList.map((item) =>
                                <div className='flex flex-col p-4'>
                                    <div className='overflow-hidden'>
                                        <Image
                                            src="/propertyImage.jpg" // The path is relative to the "public" folder
                                            alt="My Image"
                                            width={280}
                                            height={150}
                                        />
                                    </div>
                                    <div className='uppercase font-semibold'>
                                        {item.propertyName}
                                    </div>

                                    <div className="text-gray-400 text-sm">
                                        {item.propertyRating}
                                    </div>


                                </div>
                            )}
                        </div>
                    ) : "loading"
                }
            </div>
        </>

    )
}

export default index