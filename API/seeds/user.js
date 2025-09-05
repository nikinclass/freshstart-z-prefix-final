/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    {id: 1, firstname: 'Michael', lastname: 'Smith', username: 'MSmith', password: '123ABC'},
    {id: 2, firstname: 'Casey', lastname: 'Jones', username: 'CJones', password: '123ABC'},
    {id: 3, firstname: 'Perry', lastname: 'Mason', username: 'PMason', password: '123ABC'} 
  ]);
};
