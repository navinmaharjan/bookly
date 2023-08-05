const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    propertyName: String,
    propertyAddress: String,
    propertyRating: {
        type: String,
        enum: ['Five Star', 'Three Star', 'Guest House', 'Furnished Apartment'],
        default: 'Five Star'
    },
    propertyDescription: String

});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property