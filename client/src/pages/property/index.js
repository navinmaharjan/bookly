import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Link from 'next/link';



const PropertyList = () => {
    const router = useRouter();
    const [propertyDetails, setPropertyDetails] = useState([])
    const [pageCount, setPageCount] = useState(1)
    const fetchProperty = async (limit = 6, page = 1) => {
        const response = await fetch(`http://localhost:8080/property?page=${page}&limit=${limit}`)
        const result = await response.json()
        setPropertyDetails(result.data)
        setPageCount(Math.ceil(result.totalCount/limit))
    }
    useEffect(() => {
        fetchProperty()
    }, [])

    const handlePageChange = (e, page) => {
        fetchProperty(6, page)
    }

    const PropertyCard = (props) => {
        return (
            <div onClick={() => router.push(`/property/${props.item._id}`)} className='flex flex-col gap-2 cursor-pointer'>
                <div className='h-60 overflow-hidden'>
                    <Image src={('http://localhost:8080/property-image/' +props.item._id)} width={450} height={100} className='hover:scale-105 transition duration-300' alt="image" />
                </div>
                <div className='flex flex-col'>
                    <div className='text-xl font-semibold'> {props.item.propertyName}</div>
                    <div className=' text-gray-600'> {props.item.propertyType}</div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className='py-8'>
                <div className='w-full flex justify-center items-center'>
                    <h3 className='text-2xl  mb-4 font-semibold border-b-2 border-red'>
                        Popular Hotel Listing
                    </h3>
                </div>
                <div className='container mx-auto flex flex-wrap gap-5'>
                    {propertyDetails.length > 0 ? (
                        propertyDetails.map((item, id) => {
                            return <PropertyCard id={id} item={item} key={id} />
                        })
                    ) : "loading"}
                </div>
                <div className='flex justify-center pt-8'>
                    <Pagination count={pageCount} variant="outlined" shape="circle" onChange={handlePageChange} />
                </div>
            </div>
        </>

    )
}

export default PropertyList