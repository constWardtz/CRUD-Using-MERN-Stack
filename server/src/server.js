const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const app = express()

/* Middleware */
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

/* Connection */
const dbConfig = `mongodb://127.0.0.1:27017`;
const dbName = `bookDB`;

mongoose.connect(`${dbConfig}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

/* Routes */
const Books = require('./routes/Books')
app.use('/API', Books)

/* Serve static assets if in production */
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../../client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../client', 'build', 'index.html'))
    })
}

/* PORT */
const {
    PORT = 3001
} = process.env

app.listen(PORT)