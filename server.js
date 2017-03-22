const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000)
app.locals.title = 'BYOB'


app.get('/api/restaurants', (request, response) => {
  database('restaurants').select()
    .then((restaurants) => {
      response.status(200).json(restaurants);
    })
    .catch((error) => {
      console.error('something is wrong with the db');
    })
})

app.get('/api/users',(request, response) =>{
  database('users').select()
    .then((users) =>{
      response.status(200).json(users)
    })
    .catch((error)=>{
      response.status(400)
      console.error('USERS DONT WORK')
    })
})
app.get('/api/reviews',(request, response) =>{
  database('reviews').select()
    .then((reviews) =>{
      response.status(200).json(reviews)
    })
    .catch((error)=>{
      response.status(400)
      console.error('REVIEWS DONT WORK')
    })
})


app.listen(app.get('port'), ()=>{
  console.log(`${app.locals.title} is running at ${app.get('port')}`)
})
