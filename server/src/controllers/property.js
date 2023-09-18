const Property = require('../models/property')
const fs = require('fs');
const path = require('path');

const addNewProperty = async (req, res) => {
    req.body.propertyImage = req.file.filename
    await Property.create(req.body)
    res.json({
        msg: 'success'
    })
}

const getPropertyByOwnerId = async (req, res) => {
    const data = await Property.findOne({ propertyOwner: req.params.ownerId })
    res.json({ data })
}

const getAllProperty = async (req, res) => {
    const totalCount = await Property.find().count()
    const skipCount = (req.query.page - 1) * req.query.limit
    const data = await Property.find().limit(req.query.limit).skip(skipCount)
    res.json({ data, totalCount })
}

// const getPropertyImageByOwnerId = async (req, res) => {
//     const data = await Property.findOne({ propertyOwner: req.params.ownerId })
//     if (data) {
//         const propertyImageDir = path.join(__dirname, '../../', 'uploads/propertyImages/', data.propertyImage)
//         const defaultImageDir = path.join(__dirname, '../../', 'uploads/propertyImages/', 'default.jpg')
//         if (fs.existsSync(propertyImageDir)) {
//             res.sendFile(propertyImageDir)
//         } else {
//             res.sendFile(defaultImageDir)
//         }
//     }
// }

const getPropertyImageByPropertyId = async (req, res) => {
    const data = await Property.findById(req.params.propertyId)
    if (data) {
        const propertyImageDir = path.join(__dirname, '../../', 'uploads/propertyImages/', data.propertyImage)
        const defaultImageDir = path.join(__dirname, '../../', 'uploads/propertyImages/', 'default.jpg')
        if (fs.existsSync(propertyImageDir)) {
            res.sendFile(propertyImageDir)
        } else {
            res.sendFile(defaultImageDir)
        }
    }
}

module.exports = { addNewProperty, getPropertyByOwnerId, getAllProperty, getPropertyImageByPropertyId }