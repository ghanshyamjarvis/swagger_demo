const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");



const mysql = require('mysql');

const connection = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'password',
  database:'kick'
})
connection.connect();
console.log('kick database')



const port = process.env.PORT || 3300;

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "API",
      description: "API Information",
      contact: {
        name: "Developer"
      },
      host: "http://127.0.0.1:5000" ,
      produces: [
      "application/json"
      ],
      
    }
  },
  // ['.routes/*.js']
  apis: ["swagger.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.get('/getAll',(req,res)=>{
  const sql = 'select * from account'
  connection.query(sql,(err,results)=>{
    res.json({data:results})
  })
}),

app.get('/getById',(req,res)=>{
  const {id} = req.query
  const sql = 'select * from account where account_id = ?'
  connection.query(sql,[id],(err,results)=>{
    console.log(results)
    res.json({data:results})
  })
})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
