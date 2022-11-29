const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const cors = require('cors')

const {routes} = require('./src/routes')

require('./src/utils/database')

const app = express()
const port = process.env.PORT || 3000
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes.forEach((item) => {
    app.use(`/${item}`, require(`./src/routes/${item}`))
})

http.createServer(app).listen(port)
console.log(`Server listening on ${port}`)
