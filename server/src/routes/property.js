const express=require('express')
const router=express.Router()
const multer  = require('multer')
const PropertyController = require('../controllers/property')

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
router.post('/property',upload.single('propertyImage'), PropertyController.addNewProperty)

router.get('/property-image/:propertyId', PropertyController.getPropertyImageByPropertyId)

router.get('/property', PropertyController.getAllProperty)

router.get('/propertyByOwnerId/:ownerId', PropertyController.getPropertyByOwnerId)

router.get('/propertyById/:propertyId', PropertyController.getPropertyDetailsById)

// router.update('/propertyById/:propertyId', PropertyController.updatePropertyById)

module.exports=router