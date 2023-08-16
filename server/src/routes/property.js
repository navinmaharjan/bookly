const express=require('express')
const router=express.Router()
const {addNewProperty, getPropertyByOwnerId} = require('../controllers/property')

router.post('/property', addNewProperty)
router.get('/property/:ownerId', getPropertyByOwnerId)

module.exports=router