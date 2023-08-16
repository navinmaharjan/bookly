const mongoose = require('mongoose')

const ownerSchema = new mongoose.Schema({
    firstName: String, // String is shorthand for {type: String}
    lastName: String,
    mobileNo: Number,
    email: String,
    password: String
});

const owner = mongoose.model('owner', ownerSchema);
module.exports = owner