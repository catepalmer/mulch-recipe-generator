
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('Foods').insert([
        {id: 1, name: 'Apples', category: 'Fruit', measurement_units: 'Number', sweet: true, savoury: false},
        {id: 2, name: 'Bananas', category: 'Fruit', measurement_units: 'Number', sweet: true, savoury: false},
        {id: 3, name: 'Kiwifruit', category: 'Fruit', measurement_units: 'Number', sweet: true, savoury: false}
      ]);
    });
};
