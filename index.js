//express server 
const express = require('express')
const path = require('path')
const data = require('./members')
const logger =require('./middlewaer/logger')
//inorder to initalze the middleware 
const app = express();

//app.use(logger)


//=========================================================================================
//how to creat a route 

app.get('/fre',(req,res)=>{
    res.json(data)
})
///// set static  folder 
app.use(express.static(path.join(__dirname,"public  ")))



// when we deploy  the server most likelyrunit in 5000 its gonna have the variable 
 const PORT = process.env.PORT || 5000 ;

//to run the web server 
 app.listen(PORT,()=>console.log(`server running ${PORT}`))
