const express = require('express');
const app = express(express);
const endpoints = require('./endpoints')
const swaggerDoc = require('./swaggerDoc');
endpoints(app);


app.use((err,req,res,next)=>console.error('There Was An Error',err));
app.listen(4000,()=>console.log('App Strated'))

