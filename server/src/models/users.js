const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: String, // String is shorthand for {type: String}
    laststName: String,
    email: String,
    password: String,
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users