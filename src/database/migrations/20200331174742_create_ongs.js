
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('setor_origem').notNullable();
      table.string('email').notNullable();
      table.string('ramal').notNullable();
      
  });
};

exports.down = function(knex) {
   return knex.schema.dropTable('ongs');
     
};
