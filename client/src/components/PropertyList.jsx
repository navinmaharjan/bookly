import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PropertyList = () => {
    const [propertyDetails, setPropertyDetails] = useState([])
    const [pageCount, setPageCount] = useState(1)
    const fetchProperty = async (limit = 5, page = 1) => {
        const response = await fetch(`http://localhost:8080/property?page=${page}&limit=${limit}`)
        const result = await response.json()
        setPropertyDetails(result.data)
        setPageCount(Math.ceil(result.totalCount/limit))
    }
    useEffect(() => {
        fetchProperty()
    }, [])

    const handlePageChange = (e, page) => {
        fetchProperty(5, page)
    }

    const PropertyCard = (props) => {
        return (
            <div className='flex flex-col gap-2'>
                <div className='h-40 overflow-hidden'>
                    <Image src={('http://localhost:8080/property-image/' +props.item._id)} width={290} height={300} className='hover:scale-110 transition duration-300' alt="image" />
                </div>
                <div className='flex flex-col'>
                    <div className='text-xl font-semibold'> {props.item.propertyName}</div>
                    <div className=' text-gray-600'> {props.item.propertyRating}</div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className='py-8'>
                <div className='w-full flex justify-center items-center'>
                    <h3 className='text-2xl uppercase mb-4 font-semibold border-b-2 border-green-900'>
                        Popular Listing
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
                    <Pagination count={pageCount} variant="outlined" shape="rounded" onChange={handlePageChange} />
                </div>
            </div>
        </>

    )
}

export default PropertyList