exports.seed = function(knex, Promise){
  return knex('restaurants').del()
  .then(()=>{
    return Promise.all([
      knex('restaruants').insert({
        name: 'Bobs Burgers',
        type:'American'
      }),
      knex('restaruants').insert({
        name: 'Honker Burger',
        type:'American'
      }),
      knex('restaruants').insert({
        name: 'The Shore Shack',
        type:'American'
      }),
      knex('restaruants').insert({
        name: 'Los Pollos Hermonos',
        type:'Soul'
      }),
      knex('restaruants').insert({
        name: 'JJs Diner',
        type:'Breakfast'
      }),
      knex('restaruants').insert({
        name: 'Monks Cafe',
        type:'Breakfast'
      }),
      knex('restaruants').insert({
        name: 'Soul Food Cafe',
        type:'Soul'
      }),
      knex('restaruants').insert({
        name: 'Chokey Chicken',
        type:'Soul'
      }),
      knex('restaruants').insert({
        name: 'The Tip Top Cafe',
        type:'Breakfast'
      }),
      knex('restaruants').insert({
        name: 'Aint Muffin To It',
        type:'Breakfast'
      }),
      knex('restaruants').insert({
        name: 'Top Of The Muffin',
        type:'Breakfast'
      }),
      knex('restaruants').insert({
        name: 'Genghis Flan',
        type:'Dessert'
      }),
      knex('restaruants').insert({
        name: 'Little Man Ice Cream',
        type:'Dessert'
      }),
      knex('restaruants').insert({
        name: 'Piggys Pizza Palace',
        type:'Pizza'
      }),
      knex('restaruants').insert({
        name: 'Krusty Krab',
        type:'American'
      }),
      knex('restaruants').insert({
        name: 'Krusty Burger',
        type:'American'
      }),
      knex('restaruants').insert({
        name: 'The Sugar Bowl',
        type:'Dessert'
      }),
      knex('restaruants').insert({
        name: 'Floyds',
        type:'American'
      }),
      knex('restaruants').insert({
        name: 'Bronto Burger',
        type:'American'
      }),
      knex('restaruants').insert({
        name: 'Moes Tavern',
        type:'American'
      }),
      knex('restaruants').insert({
        name: 'Elzars',
        type:'Fine Dining'
      }),
      knex('restaruants').insert({
        name: 'the Gilded Truffle',
        type:'Fine Dining'
      }),
      knex('restaruants').insert({
        name: 'Pizza King',
        type:'Pizza'
      }),
      knex('restaruants').insert({
        name: 'Jimmy Pestos',
        type:'Pizza'
      }),
      knex('restaruants').insert({
        name: 'The Leaky Cauldron',
        type:'Pub'
      }),
      knex('restaruants').insert({
        name: 'Jack Rabbit Slims',
        type:'American'
      }),
      knex('restaruants').insert({
        name: 'The Three Broomsticks',
        type:'Pub'
      }),
      knex('restaruants').insert({
        name: 'Paddys Irish Pub',
        type:'Pub'
      }),
      knex('restaruants').insert({
        name: 'MacLarens Pub',
        type:'Pub'
      }),
      knex('restaruants').insert({
        name: 'Dixie Pig',
        type:'American'
      })
    ]);
  });
};
