const express = require('express');
const morgan = require('morgan')
const app = express();
const indexRouter = require('./routes/index')
const dashboard = require('./routes/dashboard')

const PORT = process.env.PORT || 3000

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
app.listen(PORT, ()=>{
    console.log('App is working')
});
