const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName: String, // String is shorthand for {type: String}
    laststName: String,
    address: String,
    email: String,
    phoneNumber: Number,
    password: String,
    role: {
        type: String,
        enum: ['owner', 'user', 'admin'],
        default: 'user'
    }
});
const Users = mongoose.model('Users', userSchema);
module.exports = Users