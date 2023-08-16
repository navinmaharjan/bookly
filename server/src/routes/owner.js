const express=require('express')
const router=express.Router()
const {registerNewOwner, loginOwner} = require('../controllers/owner')

router.post('/ownerregister', registerNewOwner)
router.post('/ownerlogin', loginOwner)

module.exports=router