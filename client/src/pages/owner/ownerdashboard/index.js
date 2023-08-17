import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {useRouter} from 'next/router'

function index() {
    const router = useRouter()
    const { ownerDetails } = useSelector(state => state.owner)
    const [propertyDetails, setPropertyDetails] = useState([])
    
    const fetchPropertyDetails = async () => {
        const response = await fetch('http://localhost:8080/property/'+ownerDetails._id)
        const result = await response.json()
        setPropertyDetails(result)
    }
    useEffect(() => {
        fetchPropertyDetails()
     
    }, [])
    return (
        <>
            <div>This is {ownerDetails.firstName} {ownerDetails.lastName}</div>
            
            {propertyDetails ? (
                <div>
                    <h1>Name: {propertyDetails.propertyName}</h1>
                   
                    <h1>Category: {propertyDetails.propertyRating}</h1>
                  

                </div>
            ) : 
            <div>
                <h1>You do not have any property to manage.</h1>
                <button className='bg-red-400' onClick={() => router.push('./propertyregister')}>Add Property</button>
            </div>
            }
        </>


    )
}

export default index