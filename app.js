const express = require('express');
const app = express();
const port = process.env.PORT|| 3000;

app.get('/', (req, res)=>res.send('hello, Nodejs. /'));
app.get('/bye', (req, res)=>res.send('bye, Nodejs'));
app.get('/welcome', (req, res)=>{
    var user_name = req.param('name');
    res.send('Hi, Welcome to the NodeJs Service ['+user_name+']')
});
app.listen(port, ()=> console.log('example app listening on port 3000'));