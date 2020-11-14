const express = require('express')
const router = express.Router()

/* Service */
const { Create } = require('../services/Services')
const { Retrieve } = require('../services/Services')
const { Update } = require('../services/Services')
const { DeleteBook } = require('../services/Services')

router.post('/create', async(req, res) => {
    const { bookName, bookAuthor } = req.body

    const result = await Create(bookName, bookAuthor)
    result ?
        res.json({
            result: result,
            message: "Success!"
        }) :
        res.json({
            result: result,
            message: "Error"
        })
})

router.get('/retrieve', async(req, res) => {
    const result = await Retrieve()

    result ?
        res.json({
            result: result,
            message: "Success!"
        }) :
        res.json({
            result: result,
            message: "Error"
        })
})

router.patch('/update', async(req, res) => {
    const { _id, set } = req.body

    const result = await Update(_id, set)

    result ?
        res.json({
            result: result,
            message: "Success!"
        }) :
        res.json({
            result: result,
            message: "Error"
        })
})

router.delete('/delete', async(req, res) => {
    const { _id } = req.body
    const result = await DeleteBook(_id)

    result ?
        res.json({
            result: result,
            message: "Success!"
        }) :
        res.json({
            result: result,
            message: "Error"
        })
})

module.exports = router;