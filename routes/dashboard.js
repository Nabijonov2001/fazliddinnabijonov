const express = require('express')
const dashboard = express.Router()


dashboard.get('/dashboard', (req, res)=>{
    res.render('dashboard.ejs')
})

module.exports = dashboard