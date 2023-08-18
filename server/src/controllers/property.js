const Property = require('../models/property')
const fs = require('fs');
const path = require('path')

const addNewProperty = async (req, res) => {

    req.body.propertyImage = req.file.filename
    await Property.create(req.body)
    res.json({
        msg: 'success'
    })
}

const getPropertyByOwnerId = async (req, res) => {

    const data = await Property.findOne({ propertyOwner: req.params.ownerId })
    res.json((data))
}

const getPropertyImageByOwnerId = async (req, res) => {
    const data = await Property.findOne({propertyOwner: req.params.ownerId})
   
    const propertyImageDir = path.join(__dirname, '../../', 'uploads/propertyImages/', data.propertyImage)
    const defaultImageDir = path.join(__dirname, '../../', 'uploads/propertyImages/', 'default.jpg')
    if(fs.existsSync(propertyImageDir)) {
        res.sendFile(propertyImageDir)
    }else {
        res.sendFile(defaultImageDir)
    }
    
}

module.exports = { addNewProperty, getPropertyByOwnerId, getPropertyImageByOwnerId }