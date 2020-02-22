///
/*express
express :-is fast ,unopinionated and minimal web framework for nodejs 
express :- is serversive or backend framework it is not comparable to client side framework like angular 
or react it can be used as commbination with those frame work to build full stack application 

// why express -much easier 
               - used for server render app as well as api 
               -extreamly light fasst and free
               -popular node js frame work
               -great to use with client side frame work as wella as its all js 

*/
// basic server syntax 
/**
 * const express = require('express)
 * ////init express 
 * const app = express()
 *
 * /////creat end point route handler 
 * app.get('/user',fun(req, res)){
 *   res.send("hellow")
 * })
 * ////////listen to the port 
 * app.listen(50000)
 * 
 * 
 */
//==================================================================================
/*basic route handeling 
app.get('/' function(req,res)){
fech from
load page 
return json 
full acess to request and response 
 }
express has router so we can store router in separate file and export 
==we can parse incoming data with its body parser 

 ====================================================================================

middleware 
//middleware function are function that have acess to request and response object express has a bulit in middleware also
come from a third party .
-executes any code
-end response cycle
-call next middleware in the stack 
===============================================================================


























*/