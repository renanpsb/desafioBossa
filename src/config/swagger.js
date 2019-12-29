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
      servers: ['http://localhost:3000'],
    },
  },
  apis: ['**/**/routes*.js', '**/swagger*.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerDocs, swaggerUI };

/**
 * @swagger
 *
 * tags:
 *  - name: tools
 *  - name: users
 *  - name: session
 * definitions:
 *  Tool:
 *    required:
 *      - title
 *      - link
 *      - description
 *      - tags
 *    type: object
 *    properties:
 *      title:
 *        type: string
 *      link:
 *        type: string
 *      description:
 *        type: string
 *      tags:
 *        type: array
 *        items:
 *          type: string
 *
 *  Session:
 *    type: object
 *    properties:
 *      email:
 *        type: string
 *      password:
 *        type: string
 *  User:
 *    required:
 *      - name
 *      - email
 *      - password
 *      - cpf
 *    type: object
 *    properties:
 *      name:
 *        type: string
 *      email:
 *        type: string
 *      telefone:
 *        type: string
 *      cpf:
 *        type: string
 *      password:
 *        type: string
 *
 * securityDefinitions:
 *  Bearer:
 *    type: apiKey
 *    in: header
 *    name: Authorization
 *
 *
 *
 *
 * schemes:
 *  - http
 *  - https
 */
