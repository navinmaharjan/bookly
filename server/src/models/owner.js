const mongoose = require('mongoose')

const ownerSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String
});

const owner = mongoose.model('owner', ownerSchema);
module.exports = owner