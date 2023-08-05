const express=require('express')
const router=express.Router()
const {addNewProperty} = require('../controllers/property')

router.post('/property', addNewProperty)
module.exports=router