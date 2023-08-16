const Property = require('../models/property')

const addNewProperty = async (req, res) => {

    await Property.create(req.body)
    res.json({
        msg: 'success'
    })
}

const getPropertyByOwnerId = async (req, res) => {

    const data = await Property.find({ propertyOwner: req.params.ownerId })
    res.json((data))

}

module.exports = { addNewProperty, getPropertyByOwnerId }