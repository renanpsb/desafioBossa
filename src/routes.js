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
 *      name: body
 *      description: Atributos do usuário a ser cadastrado.
 *      required: true
 *      schema:
 *        $ref: '#definitions/User'
 *    responses:
 *      '201':
 *        description: Usuário criado com sucesso.
 *      '400':
 *        description: Falha na validação dos parametros
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
 *      name: body
 *      description: Usuário e senha para autenticação
 *      required: true
 *      schema:
 *        $ref: '#definitions/Session'
 *    responses:
 *      '200':
 *        description: Usuário verificado com sucesso.
 *      '400':
 *        description: Falha na validação dos parametros
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
 *      '401':
 *        description: Falha de autorização.
 *    security:
 *    - Bearer: []
 *
 * /tools?tag={tag}:
 *  get:
 *    tags:
 *    - tools
 *    description: Busca ferramentas que contém uma tag especifica.
 *    parameters:
 *    - name: tag
 *      in: path
 *      description: Ferramentas que contem está tag.
 *      required: true
 *      type: string
 *    responses:
 *      '200':
 *        description: Requisição respondida com sucesso.
 *      '401':
 *        description: Falha de autorização.
 *    security:
 *    - Bearer: []
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
 *      name: body
 *      schema:
 *       $ref: '#definitions/Tool'
 *    responses:
 *      '201':
 *        schema:
 *          $ref: '#definitions/Tool'
 *        description: Ferramenta criada com sucesso.
 *      '400':
 *        description: Falha na validação dos parametros
 *      '401':
 *        description: Falha de autorização.
 *    security:
 *    - Bearer: []
 */
routes.post('/tools', ToolController.store);

/**
 * @swagger
 * /tools/{tool_Id}:
 *  delete:
 *    tags:
 *    - tools
 *    description: Deleta uma ferramenta por sua id.
 *    parameters:
 *    - name: tool_Id
 *      in: path
 *      description: Id da ferramente a ser excluida.
 *      required: true
 *      type: string
 *
 *    responses:
 *      '204':
 *        description: Ferramenta não existe mais na base.
 *      '401':
 *        description: Falha de autorização.
 *    security:
 *    - Bearer: []
 *
 */
routes.delete('/tools/:id', ToolController.delete);

export default routes;
