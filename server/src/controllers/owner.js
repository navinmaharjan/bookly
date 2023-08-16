const owner = require('../models/owner')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerNewOwner = async (req, res) => {

    //check if email already exists (using exist/ findOne)
    const matched = await owner.exists({ email: req.body.email })

    if (matched) {
        res.status(409).json({
            msg: 'Email already exist'
        })
    } else {
        //encrypt the password
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashPassword

        await owner.create(req.body)
        res.status(201).json({
            msg: 'Your account created succesfully.'
        })
    }
}

const loginOwner = async (req, res) => {

    const data = await owner.findOne({ email: req.body.email }).lean()

    if (data) {
        const isMatched = await bcrypt.compare(req.body.password, data.password)

        if (isMatched) {
            const {password, ...ownerDetails} = data
            //generate token
            const token = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY);
            res.json({
                success: true,
                token,
                ownerDetails
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

module.exports = { registerNewOwner, loginOwner }