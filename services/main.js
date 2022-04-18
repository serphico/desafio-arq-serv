const express = require('express')
const {productRoute} = require('../routes/productsRoute')

const app = express()

app.use(express.json())

app.use('/product', productRoute)

module.exports = app;