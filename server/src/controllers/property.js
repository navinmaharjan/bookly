const Property= require('../models/property')

const addNewProperty = async(req,res)=>{
   
    await Property.create(req.body)
      res.json({
        msg: 'success'
      })
  }

  module.exports = {addNewProperty}