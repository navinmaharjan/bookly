const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    propertyName: String,
    propertyType: {
        type: String,
        enum: ['Hotel', 'Guest House', 'Bed & Breakfast', 'Seviced Apartment', 'Resort','Villa'],
    },
    propertyImage: String,
    propertyOwner: String,
});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property