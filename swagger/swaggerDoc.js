const swaggerUi = require('swagger-ui-express');

const swaggerJsdoc = require('swagger-jsdoc');

const options ={

	swaggerDefinition: {
		info: {
			description: 'sample server',
			title: 'Swagger Demo',
			version: '1.0.0',
		},
		basePath: '/',
	},
	apis: ['endpoints.js'],
}

const specs = swaggerJsdoc(options)
module.exports =(app)=>{
	app.use('api-docs',swaggerUi.serve,swaggerUi.setup(options))
} 