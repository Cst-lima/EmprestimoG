const express = require('express');
const { Segments, celebrate, Joi}= require('celebrate');

const OngController = require('./Controlleres/OngController');
const IncidentController = require('./Controlleres/IncidentController');
const ProfileController = require('./Controlleres/ProfileController');
const SessionContrller = require('./Controlleres/SessionContrller');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        setor_origem: Joi.string().required(),
        email: Joi.string().required().email(),
        ramal: Joi.string().required().min(10).max(13),        
    })
}),OngController.create);

routes.post('/session', SessionContrller.create);


routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),                
    }).unknown(),
}),ProfileController.index);


routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),IncidentController.index);

routes.post('/incidents', celebrate({
     [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),                
        }).unknown(),
        
    [Segments.BODY]: Joi.object().keys({
        setor_origem: Joi.string().required(),
        setor_destino: Joi.string().required(),
        qtd_horas: Joi.number().required(),
        data_emprestimo: Joi.string().required(),
        observation: Joi.string(),        
    })
}),IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),IncidentController.delete);

module.exports = routes;