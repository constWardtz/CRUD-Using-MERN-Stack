const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    bookAuthor: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('bookcollections', bookSchema)