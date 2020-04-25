
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();
        table.string('data_emprestimo').notNullable();
        table.string('setor_origem').notNullable();
        table.string('setor_destino').notNullable();        
        table.decimal('qtd_horas').notNullable();
        table.string('observation').notNullable();

        table.string('ongs_id').notNullable();
        table.foreign('ongs_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');

};
