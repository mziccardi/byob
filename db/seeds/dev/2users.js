exports.seed = function(knex, Promise){
  return knex('users').del()
  .then(()=>{
    return Promise.all([
      knex('users').insert({
        firstname:'Bob',
        lastname:'Belcher',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Linda',
        lastname:'Belcher',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Tina',
        lastname:'Belcher',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Gene',
        lastname:'Belcher',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Louise',
        lastname:'Belcher',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Homer',
        lastname:'Simpson',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Marge',
        lastname:'Simpson',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Bart',
        lastname:'Simpson',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Lisa',
        lastname:'Simpson',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Maggie',
        lastname:'Simpson',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Hank',
        lastname:'Hill',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Peggy',
        lastname:'Hill',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Bobby',
        lastname:'Hill',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Stan',
        lastname:'Marsh',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Randy',
        lastname:'Marsh',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Eric',
        lastname:'Cartman',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Mike',
        lastname:'Ziccardi',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Luanne',
        lastname:'Hill',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Ladybird',
        lastname:'Hill',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Timmy',
        lastname:'Turner',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Tommy',
        lastname:'Pickles',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Stu',
        lastname:'Pickles',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Dill',
        lastname:'Pickles',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Hal',
        lastname:'Wilkerson',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Louis',
        lastname:'Wilkerson',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Francis',
        lastname:'Wilkerson',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Reese',
        lastname:'Wilkerson',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Malcom',
        lastname:'Wilkerson',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Dewey',
        lastname:'Wilkerson',
        created_at: new Date
      }),
      knex('users').insert({
        firstname:'Jamie',
        lastname:'Wilkerson',
        created_at: new Date
      })
    ])
  })
}
