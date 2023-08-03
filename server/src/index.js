const express = require('express')
const useRoutes = require('./routes/users')

const app = express()

require('dotenv').config()
app.use(express.json())
app.use(useRoutes)

const connectDb = require('./db/connecttion')



connectDb()
const port = process.env.PORT
console.log(process.env)

console.log(process.env)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})