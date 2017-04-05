exports.seed = function(knex, Promise){
  return knex('restaurants').del()
  .then(()=>{
    return Promise.all([
      knex('restaurants').insert({
        name: 'Bobs Burgers',
        type:'American',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'Honker Burger',
        type:'American',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'The Shore Shack',
        type:'American',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'Los Pollos Hermonos',
        type:'Soul',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'JJs Diner',
        type:'Breakfast',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'Monks Cafe',
        type:'Breakfast',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'Soul Food Cafe',
        type:'Soul',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'Chokey Chicken',
        type:'Soul',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'The Tip Top Cafe',
        type:'Breakfast',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'Aint Muffin To It',
        type:'Breakfast',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'Top Of The Muffin',
        type:'Breakfast',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'Genghis Flan',
        type:'Dessert',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'Little Man Ice Cream',
        type:'Dessert',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name:'Piggys Pizza Palace',
        type:'Pizza',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'Krusty Krab',
        type:'American',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'Krusty Burger',
        type:'American',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'The Sugar Bowl',
        type:'Dessert',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'Floyds',
        type:'American',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'Bronto Burger',
        type:'American',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'Moes Tavern',
        type:'American',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'Elzars',
        type:'Fine Dining',
        created_at: new Date
      }),
      knex('restaurants').insert({        name: 'the Gilded Truffle',
        type:'Fine Dining',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'Pizza King',
        type:'Pizza',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'Jimmy Pestos',
        type:'Pizza',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'The Leaky Cauldron',
        type:'Pub',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'Jack Rabbit Slims',
        type:'American',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'The Three Broomsticks',
        type:'Pub',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'Paddys Irish Pub',
        type:'Pub',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'MacLarens Pub',
        type:'Pub',
        created_at: new Date
      }),
      knex('restaurants').insert({
        name: 'Dixie Pig',
        type:'American',
        created_at: new Date
      })
    ]);
  });
};
