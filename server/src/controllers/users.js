const Users = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerNewUser = async (req, res) => {

    //check if email already exists (using exist/ findOne)
    const matched = await Users.exists({ email: req.body.email })

    if (matched) {
        res.status(409).json({
            msg: 'Email already exist'
        })
    } else {
        //encrypt the password
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashPassword

        await Users.create(req.body)
        res.status(201).json({
            msg: 'User created successfully'
        })
    }
}

const loginUser = async (req, res) => {

    const data = await Users.findOne({ email: req.body.email }).lean()

    if (data) {
        const isMatched = await bcrypt.compare(req.body.password, data.password)

        if (isMatched) {
            const {password, ...userDetails} = data
            //generate token
            const token = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY);
            res.json({
                success: true,
                token,
                userDetails
            })
        } else {
            res.json({
                success: false,
                msg: 'Incorrect password'
            })
        }
    } else {
        res.json({
            success: false,
            msg: 'No user found'
        })
    }
    //1. email
    //2. check if user is availabe or not in email (if No: "No user found", if Yes:" compare password (db -> req.body.password")
    //3. No: 'Incorrect password' -> Yes: genearate a Token
    //4. send token to response (res.json((token, status: success)))
}

module.exports = { registerNewUser, loginUser }