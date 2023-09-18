const express=require('express')
const router=express.Router()
const multer  = require('multer')
const {addNewProperty, getPropertyByOwnerId, getAllProperty, getPropertyImageByPropertyId} = require('../controllers/property')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/propertyImages')
    },
    filename: function (req, file, cb) {
        const imageName = Date.now() + file.originalname
    cb(null, imageName)
    }
  })
  
const upload = multer({ storage: storage })
router.post('/property',upload.single('propertyImage'), addNewProperty)

router.get('/property-image/:propertyId', getPropertyImageByPropertyId)

router.get('/property', getAllProperty)

router.get('/property/:ownerId', getPropertyByOwnerId)

module.exports=router