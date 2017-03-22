exports.seed = function(knex, Promise){
  return knex('users').del()
  .then(()=>{
    return Promise.all([
      knex('users').insert({
        id:1,
        firstname:'Bob',
        lastname:'Belcher',
        created_at: new Date
      }),
      knex('users').insert({
        id:2,
        firstname:'Linda',
        lastname:'Belcher',
        created_at: new Date
      }),
      knex('users').insert({
        id:3,
        firstname:'Tina',
        lastname:'Belcher',
        created_at: new Date
      }),
      knex('users').insert({
        id:4,
        firstname:'Gene',
        lastname:'Belcher',
        created_at: new Date
      }),
      knex('users').insert({
        id:5,
        firstname:'Louise',
        lastname:'Belcher',
        created_at: new Date
      }),
      knex('users').insert({
        id:6,
        firstname:'Homer',
        lastname:'Simpson',
        created_at: new Date
      }),
      knex('users').insert({
        id:7,
        firstname:'Marge',
        lastname:'Simpson',
        created_at: new Date
      }),
      knex('users').insert({
        id:8,
        firstname:'Bart',
        lastname:'Simpson',
        created_at: new Date
      }),
      knex('users').insert({
        id:9,
        firstname:'Lisa',
        lastname:'Simpson',
        created_at: new Date
      }),
      knex('users').insert({
        id:10,
        firstname:'Maggie',
        lastname:'Simpson',
        created_at: new Date
      }),
      knex('users').insert({
        id:11,
        firstname:'Hank',
        lastname:'Hill',
        created_at: new Date
      }),
      knex('users').insert({
        id:12,
        firstname:'Peggy',
        lastname:'Hill',
        created_at: new Date
      }),
      knex('users').insert({
        id:13,
        firstname:'Bobby',
        lastname:'Hill',
        created_at: new Date
      }),
      knex('users').insert({
        id:14,
        firstname:'Stan',
        lastname:'Marsh',
        created_at: new Date
      }),
      knex('users').insert({
        id:15,
        firstname:'Randy',
        lastname:'Marsh',
        created_at: new Date
      }),
      knex('users').insert({
        id:16,
        firstname:'Eric',
        lastname:'Cartman',
        created_at: new Date
      }),
      knex('users').insert({
        id:17,
        firstname:'Mike',
        lastname:'Ziccardi',
        created_at: new Date
      }),
      knex('users').insert({
        id:18,
        firstname:'Luanne',
        lastname:'Hill',
        created_at: new Date
      }),
      knex('users').insert({
        id:19,
        firstname:'Ladybird',
        lastname:'Hill',
        created_at: new Date
      }),
      knex('users').insert({
        id:20,
        firstname:'Timmy',
        lastname:'Turner',
        created_at: new Date
      }),
      knex('users').insert({
        id:21,
        firstname:'Tommy',
        lastname:'Pickles',
        created_at: new Date
      }),
      knex('users').insert({
        id:22,
        firstname:'Stu',
        lastname:'Pickles',
        created_at: new Date
      }),
      knex('users').insert({
        id:23,
        firstname:'Dill',
        lastname:'Pickles',
        created_at: new Date
      }),
      knex('users').insert({
        id:24,
        firstname:'Hal',
        lastname:'Wilkerson',
        created_at: new Date
      }),
      knex('users').insert({
        id:25,
        firstname:'Louis',
        lastname:'Wilkerson',
        created_at: new Date
      }),
      knex('users').insert({
        id:26,
        firstname:'Francis',
        lastname:'Wilkerson',
        created_at: new Date
      }),
      knex('users').insert({
        id:27,
        firstname:'Reese',
        lastname:'Wilkerson',
        created_at: new Date
      }),
      knex('users').insert({
        id:28,
        firstname:'Malcom',
        lastname:'Wilkerson',
        created_at: new Date
      }),
      knex('users').insert({
        id:29,
        firstname:'Dewey',
        lastname:'Wilkerson',
        created_at: new Date
      }),
      knex('users').insert({
        id:30,
        firstname:'Jamie',
        lastname:'Wilkerson',
        created_at: new Date
      })
    ])
  })
}
