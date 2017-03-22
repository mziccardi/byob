exports.seed = function(knex, Promise){
  return knex('restaurants').del()
  .then(()=>{
    return Promise.all([
      knex('restaurants').insert({
        id:1,
        name: 'Bobs Burgers',
        type:'American',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:2,
        name: 'Honker Burger',
        type:'American',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:3,
        name: 'The Shore Shack',
        type:'American',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:4,
        name: 'Los Pollos Hermonos',
        type:'Soul',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:5,
        name: 'JJs Diner',
        type:'Breakfast',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:6,
        name: 'Monks Cafe',
        type:'Breakfast',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:7,
        name: 'Soul Food Cafe',
        type:'Soul',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:8,
        name: 'Chokey Chicken',
        type:'Soul',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:9,
        name: 'The Tip Top Cafe',
        type:'Breakfast',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:10,
        name: 'Aint Muffin To It',
        type:'Breakfast',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:11,
        name: 'Top Of The Muffin',
        type:'Breakfast',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:12,
        name: 'Genghis Flan',
        type:'Dessert',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:13,
        name: 'Little Man Ice Cream',
        type:'Dessert',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:14,
        name:'Piggys Pizza Palace',
        type:'Pizza',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:15,
        name: 'Krusty Krab',
        type:'American',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:16,
        name: 'Krusty Burger',
        type:'American',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:17,
        name: 'The Sugar Bowl',
        type:'Dessert',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:18,
        name: 'Floyds',
        type:'American',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:19,
        name: 'Bronto Burger',
        type:'American',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:20,
        name: 'Moes Tavern',
        type:'American',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:21,
        name: 'Elzars',
        type:'Fine Dining',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:22,
        name: 'the Gilded Truffle',
        type:'Fine Dining',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:23,
        name: 'Pizza King',
        type:'Pizza',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:24,
        name: 'Jimmy Pestos',
        type:'Pizza',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:25,
        name: 'The Leaky Cauldron',
        type:'Pub',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:26,
        name: 'Jack Rabbit Slims',
        type:'American',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:27,
        name: 'The Three Broomsticks',
        type:'Pub',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:28,
        name: 'Paddys Irish Pub',
        type:'Pub',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:29,
        name: 'MacLarens Pub',
        type:'Pub',
        created_at: new Date
      }),
      knex('restaurants').insert({
        id:30,
        name: 'Dixie Pig',
        type:'American',
        created_at: new Date
      })
    ]);
  });
};
