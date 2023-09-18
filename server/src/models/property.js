const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    propertyName: String,
    propertyCity: String,
    propertyStreetAddress: String,
    propertySubStreetAddress: String,
    propertyState: String,
    propertyRating: {
        type: String,
        enum: ['Five Star', 'Three Star', 'Guest House', 'Furnished Apartment'],
        default: 'Five Star'
    },
    propertyImage: String,
    propertyOwner: String
    
});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property