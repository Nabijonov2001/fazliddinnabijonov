const express = require('express');
const morgan = require('morgan')
const app = express();
const indexRouter = require('./routes/index')
const dashboard = require('./routes/dashboard')

// middleware
app.use(express.static('public'));
app.use(express.static('vendor'))
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))

 
// view engine
app.set('view engine', 'ejs');

// routes
app.use('/', indexRouter)
app.use('/readMore', indexRouter)
app.use('/dashboard', dashboard)
app.listen(3000, 'localhost', (()=>{
    console.log('app is working on port 3000')
}))