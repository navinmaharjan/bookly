const express = require('express')
const useRoutes = require('./routes/users')
const PropertyRoutes = require('./routes/property')
const  cors = require('cors')
const app = express()

require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(useRoutes)
app.use(PropertyRoutes)

const connectDb = require('./db/connecttion')
connectDb()
const port = process.env.PORT

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})