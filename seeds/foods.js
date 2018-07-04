
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('Foods').insert([
        {name: 'Bananas', category: 'Fruit', sweet: true, savoury: false, sloppiness: 4},
        {name: 'Cardboard', category: 'Grains', sweet: true, savoury: true, sloppiness: 1},
        {name: 'Newspaper', category: 'Grains', sweet: true, savoury: true, sloppiness: 1},
        {name: 'Oats', category: 'Grains', sweet: true, savoury: true, sloppiness: 1},
        {name: 'Cocoa', category: 'Condiments', sweet: true, savoury: false, sloppiness: 1},
        {name: 'Curry powder', category: 'Condiments', sweet: false, savoury: true, sloppiness: 1},
        {name: 'Broccoli', category: 'Vegetables', sweet: false, savoury: true, sloppiness: 2},
        {name: 'Mildew', category: 'Condiments', sweet: false, savoury: false, sloppiness: 2},
        {name: 'Liquid smoke', category: 'Condiments', sweet: false, savoury: true, sloppiness: 5},
        {name: 'Pumpkin', category: 'Vegetables', sweet: true, savoury: true, sloppiness: 3},
        {name: 'Dried fungus', category: 'Vegetables', sweet: false, savoury: true, sloppiness: 1},
        {name: 'Seaweed', category: 'Vegetables', sweet: false, savoury: true, sloppiness: 1},
        {name: 'Lint', category: 'Grains', sweet: false, savoury: true, sloppiness: 1},
        {name: 'Oranges', category: 'Fruit', sweet: true, savoury: false, sloppiness: 4},
        {name: 'PVA', category: 'Beverages', sweet: true, savoury: true, sloppiness: 4},
        {name: 'Almond milk', category: 'Beverages', sweet: true, savoury: true, sloppiness: 5},
        {name: 'Soy milk', category: 'Beverages', sweet: true, savoury: true, sloppiness: 5},
        {name: 'Cordyceps', category: 'Vegetables', sweet: false, savoury: true, sloppiness: 2},
        {name: 'Durian', category: 'Fruit', sweet: true, savoury: false, sloppiness: 3},
        {name: 'Gravy', category: 'Condiments', sweet: false, savoury: true, sloppiness: 4},
        {name: 'Slop', category: 'Condiments', sweet: false, savoury: true, sloppiness: 4},
        {name: 'Apples', category: 'Fruit', sweet: true, savoury: false, sloppiness: 3}
      ]);
    });
};
