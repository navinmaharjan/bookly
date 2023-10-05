import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
const index = () => {
    const [propertyDetails, setPropertyDetails] = useState([])
  
    const router = useRouter();
    const fetchPropertyDetails = async () => {
            const response = await fetch("http://localhost:8080/property/"+router.query.id)
            const result = await response.json()
            setPropertyDetails(result.data)
    }
    useEffect(() => {
        if(router.query.id) {
            fetchPropertyDetails()
        }
    }, [router.query.id])
   
  return (
    <div>
        {propertyDetails.propertyName}
        {propertyDetails.propertyImage}
       
    </div>
  )
}

export default index