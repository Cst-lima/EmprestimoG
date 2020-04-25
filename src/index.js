

/* Rota / recurso

Metodo HHTP
GET - Busca uma informação no backend
POST - Cria uma informação no backend
PUT - Altera uma informação no backend
Delete - Deleta uma informação no backend.

TIPOS de parametros
QUery Params: parametros nomeados enviados na rota apos "?" (Filtros e apaginação)
Rooute "": parametros utilizados para identificar recurso.
request bory -  corpo fa requisição, utilizado

BANCO de dados

SQL - Mysql, sqlite, postgreSQL
NoSQL -  MongoDB

*/

const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate')
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use( errors());

app.listen(3333);