
const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response) { 
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    async create(request, response) {
        const { setor_origem, email, ramal} = request.body;

        const id = setor_origem;
        
       await connection('ongs').insert({
          
            id,
           setor_origem,
           email,
           ramal,
          
       })       
        return response.json({ id });
    }
};