const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
const { Schema } = mongoose;

const userSchema = new Schema({
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


const connectDb= async()=> {
 try{
  const res = await mongoose.connect('mongodb://127.0.0.1:27017/booklyDb');
  if(res) console.log('connected to mongodb')
 }catch(err){
  console.log(err)
 }
}

connectDb()
const port = 3005


const registerNewUser = (req,res)=>{
  Users.create(req.body)
    res.json({
      msg: 'success'
    })
}
 
const getAllUser = async(req,res)=>{
  const data  = await Users.find()
    res.json({
      msg: 'success',
      data: data
    })
}


const getUserById = async(req,res)=>{
  const data  = await Users.findById(req.params.id)
    res.json({
      msg: 'success',
      data: data
    })
}
const deleteExistingUser = async(req,res)=>{
  const data  = await Users.findByIdAndDelete(req.params.id)
    res.json({
      msg: 'success',
      data: data
    })
}

const updateExistingUser = async(req,res)=>{
  const data  = await Users.findByIdAndUpdate(req.params.id, req.body)
    res.json({
      msg: 'success',
      data: data
    })
}
app.post('/register', registerNewUser)
app.get('/users', getAllUser)
app.get('/users/:id', getUserById)
app.delete('/users/:id', deleteExistingUser)
app.put('/users/:id', updateExistingUser)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})