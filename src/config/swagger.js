/* eslint-disable global-require */
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Desafio Bossa Api',
      description: 'Desafio Bossa Api',
      contact: {
        name: 'Renan Pelegrini Sebben',
      },
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      servers: ['http://localhost:3000'],
    },
  },
  apis: ['**/routes*.js'],
  basePath: '../',
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerDocs, swaggerUI };
