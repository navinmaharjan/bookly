import React from 'react'
import { useSelector } from 'react-redux'

function index() {
    const {ownerDetails} = useSelector(state=>state.owner)
    
  return (
    <div>This is {ownerDetails.firstName} {ownerDetails.lastName}</div>
  )
}

export default index