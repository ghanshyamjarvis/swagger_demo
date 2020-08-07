const app = require('./src/app');
const port = process.env.PORT || 5000;
const expressSwagger = require('express-swagger-generator')(app);


var options = {
    swaggerDefinition: {
        info: {
            description: 'sample server',
            title: 'Swagger Demo',
            version: '1.0.0',
        },
        host: '127.0.0.1:5000',
        basePath: '/',
        produces: [
            "application/json"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    
    basedir: __dirname, //app absolute path
    files: ['./src/swaggerroute/**/*.js'] //Path to the API handle folder
    //files: ['./src/controllers/*.js'] //Path to the API handle folder
};

expressSwagger(options)


const  server = app.listen(port,function () {
  console.log("Connected At " + port);
});

server.timeout = 30000;