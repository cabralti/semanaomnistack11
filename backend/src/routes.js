const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Tipos de parâmetros:
 * 
 * 1. Query Params: Parâmetros nomeados enviados na rota após "?" (Filtro, Paginação)
 *      request.query;
 * 2. Route Params: Parâmetros utilizados para identificar recursos
 *      request.params;
 * 3. Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 *      request.body;
 */

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;