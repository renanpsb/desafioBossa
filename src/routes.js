import UserControler from './app/controllers/UserController';
import ToolController from './app/controllers/ToolController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Bem vindo API do desafio Bossa' });
});

/**
 * @swagger
 * /users:
 *  post:
 *    tags:
 *    - users
 *    description: Usado para criar um novo usuário.
 *    parameters:
 *    - in: body
 *      description: Atributos do usuário a ser cadastrado.
 *      required: true
 *      schema:
 *        $ref: '#definitions/User'
 *    responses:
 *      '201':
 *        description: Usuário criado com sucesso.
 */
routes.post('/users', UserControler.store);

/**
 * @swagger
 * /login:
 *  post:
 *    tags:
 *    - session
 *    description: Usado para receber um token de autenticação.
 *    parameters:
 *    - in: body
 *      description: Usuário e senha para autenticação
 *      required: true
 *      schema:
 *        $ref: '#definitions/Session'
 *    responses:
 *      '200':
 *        description: Usuário verificado com sucesso.
 */
routes.post('/login', SessionController.store);

routes.use(authMiddleware);

/**
 * @swagger
 * /tools:
 *  get:
 *    tags:
 *    - tools
 *    description: Usado para buscar todas ferramentas.
 *    responses:
 *      '200':
 *        description: Requisição respondida com sucesso.
 *
 * /tools?tag={tag}:
 *  get:
 *    tags:
 *    - tools
 *    description: Busca ferramentas que contém uma tag especifica.
 *    responses:
 *      '200':
 *        description: Requisição respondida com sucesso.
 */
routes.get('/tools', ToolController.index);

/**
 * @swagger
 * /tools:
 *  post:
 *    tags:
 *    - tools
 *    description: Cria uma nova ferramenta
 *    parameters:
 *    - in: body
 *      schema:
 *       $ref: '#definitions/Tool'
 *    responses:
 *      '201':
 *        schema:
 *          $ref: '#definitions/Tool'
 *        description: Ferramenta criada com sucesso.
 *      '400':
 *        description: Falha na validação dos parametros
 */
routes.post('/tools', ToolController.store);

/**
 * @swagger
 * /tools/{toolId}:
 *  delete:
 *    tags:
 *    - tools
 *    description: Deleta uma ferramenta por sua id.
 *    responses:
 *      '204':
 *        description: Ferramenta não existe mais na base.
 *
 */

routes.delete('/tools/:id', ToolController.delete);

export default routes;

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
 *    required:
 *      - email
 *      - password
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
 *
 */
