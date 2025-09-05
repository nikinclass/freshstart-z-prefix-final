/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('item').del()
  await knex('item').insert([
    {item_id: 1, user_id: 1, item_name: 'Laptop', description: 'Lenovo Laptop', quantity: 1},
    {item_id: 2, user_id: 2, item_name:  'Monitor', description:  'LG Monitor', quantity: 1},
    {item_id: 3, user_id: 3, item_name:  'iPad', description:  'Apple iPad', quantity: 1} 
  ]);
};
