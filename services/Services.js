const Books = require('../models/Books');

const Create = async(bookName, bookAuthor) => {
    try {
        await Books.insertMany({ bookName, bookAuthor })
        return true
    } catch (err) {
        return false
    }
}

const Retrieve = async() => {
    try {
        return await Books.find({})
    } catch (err) {
        return []
    }
}

const Update = async(_id, set) => {
    try {
        await Books.update({ _id }, { $set: set })
        return true
    } catch (err) {
        return false
    }
}
const DeleteBook = async(_id) => {
    try {
        await Books.deleteOne({ _id })
        return await Books.find({})
    } catch (err) {
        return false
    }
}


module.exports = {
    Create,
    Retrieve,
    Update,
    DeleteBook
}