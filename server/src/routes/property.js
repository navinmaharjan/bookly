const express=require('express')
const router=express.Router()
const {addNewProperty, getAllProperty} = require('../controllers/property')

router.post('/property', addNewProperty)
router.get('/property', getAllProperty)
module.exports=router