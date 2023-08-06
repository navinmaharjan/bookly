const Property = require('../models/property')

const addNewProperty = async (req, res) => {

    await Property.create(req.body)
    res.json({
        msg: 'success'
    })
}

const getAllProperty = async (req, res) => {

    const data = await Property.find()
    if (data) {
        res.json({
            propertyList: data,
            msg: 'success'
        })
    }

}

module.exports = { addNewProperty, getAllProperty}