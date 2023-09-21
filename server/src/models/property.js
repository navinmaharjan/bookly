const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    propertyName: String,
    propertyCity: String,
    propertyStreetAddress: String,
    propertySubStreetAddress: String,
    propertyState: String,
    propertyType: {
        type: String,
        enum: ['Hotel', 'Guest House', 'Bed & Breakfast', 'Seviced Apartment', 'Resort','Villa'],
    },
    propertyImage: String,
    propertyOwner: String,
    propertyCancellationPolicy: {
        type: String,
        enum: ['Flexible', 'Moderate', 'Strict']
    },
    propertyCheckInFrom: String,
    propertyCheckInTo: String,
    propertyCheckOut: String,
    propertyStarRating: String,
    propertyRoomType: {
        type: String,
        enum: ['Suite Room','Deluxe Room', 'Standard Room']
    },
    suiteRoomImage: String,
    deluxeRoomImage: String,
    standardRoomImage: String,
    propertyInformation: {
        type: String,
        enum: ['Air Condition', 'Brekfast', 'Laundry Service', 'Free WIFI']
    },
    paymentInformation: {
        type: String,
        enum: ['Cash', 'Esewa', 'Fonepay', 'Khalti', 'ConnectIPS']
    }
});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property