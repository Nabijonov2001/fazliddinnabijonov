const express = require('express')
const router = express.Router()


router.get('/readMore', (req, res)=>{
    res.render('readMore.ejs')
})

module.exports = router