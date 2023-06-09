const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts');


const indexRouter = require('./routes/index')


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/mvcDB');
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000,()=>{
    console.log("Site is running on port 3000")
})