const express = require('express')
const userRoutes = require('./routes/users')
const propertyRoutes = require('./routes/property')
const ownerRoutes = require('./routes/owner')
const  cors = require('cors')
const app = express()

require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(userRoutes)
app.use(propertyRoutes)
app.use(ownerRoutes)

const connectDb = require('./db/connecttion')
connectDb()
const port = process.env.PORT

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})