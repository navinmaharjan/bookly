import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const PropertyCard = (props) => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='h-40 overflow-hidden'>
                <Image src={'http://localhost:8080/property-image/' + props.item._id} width={290} height={300} className='hover:scale-110 transition duration-300' />
            </div>
            <div className='flex flex-col'>
                <div className='text-xl font-semibold'> {props.item.propertyName}</div>
                <div className=' text-gray-600'> {props.item.propertyRating}</div>
            </div>
        </div>
    )
}

const PropertyList = () => {
    const [propertyDetails, setPropertyDetails] = useState([])
    const fetchProperty = async () => {
        const response = await fetch("http://localhost:8080/property")
        const result = await response.json()
        setPropertyDetails(result)
    }
    useEffect(() => {
        fetchProperty()
    }, [])
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
                        propertyDetails.map((item) => {
                            return <PropertyCard item={item} />
                        })
                    ) : "loading"}
                </div>
            </div>



        </>

    )
}

export default PropertyList