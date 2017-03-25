const bodyParser = require('body-parser')
const express = require('express')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000)
app.locals.title = 'BYOB'

//all restaurants
app.get('/api/restaurants', (request, response) => {
  database('restaurants').select()
    .then((restaurants) => {
      response.status(200).json(restaurants);
    })
    .catch((error) => {
      console.error('something is wrong with the db');
    })
})
//all users
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
//get all reviews
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
//find reviews that a user has posted
app.get('/api/reviews/:userId/user', (request,response)=>{
  database('reviews').where('userId', request.params.userId)
  .then((users) =>{
    response.status(200).json(users)
  })
  .catch((error)=>{
    response.status(400)
    console.log('THIS USER HAS NO REVIEWS')
  })
})
//find reviews for a restaurant
app.get('/api/restaurants/:id/reviews', (request,response) => {
  database('reviews').where('restaurantId', request.params.id)
    .then((reviews) =>{
      response.status(200).json(reviews)
    })
    .catch((error) =>{
      console.error('cant find reviews for this restaurant')
    })
})
//POST a new restaurant
app.post('/api/restaurants', (request, response)=>{
  const { name, type } = request.body;
  const newRestaurant = { name, type, created_at: new Date };

  database('restaurants').insert(newRestaurant)
    .then(()=>{
      database('restaurants').select()
        .then((restaurants) =>{
          response.status(200).json(restaurants)
        })
        .catch((error) => {
          response.status(500)
            console.error('POST RESTAURANTS IS BROKEN')
        })
    })
})
//post a new user
app.post('/api/users', (request, response)=>{
  const { firstname, lastname } = request.body;
  const newUser = { firstname, lastname, created_at: new Date };

  database('users').insert(newUser)
    .then(()=>{
      database('users').select()
        .then((users) =>{
          response.status(200).json(users)
        })
        .catch((error) => {
          response.status(500)
            console.error('POST USERS IS BROKEN')
        })
    })
})
app.post('/api/reviews/:restaurantId/reviews', (request, response)=>{
  const { restaurantId, userId, review } = request.body;
  const newReview = { restaurantId, userId, review, created_at: new Date };

  database('reviews').insert(newReview)
    .then(()=>{
      database('reviews').select()
        .then((reviews) =>{
          response.status(200).json(reviews)
        })
        .catch((error) => {
          response.status(500)
            console.error('POST REVIEWS IS BROKEN')
        })
    })
})




app.listen(app.get('port'), ()=>{
  console.log(`${app.locals.title} is running at ${app.get('port')}`)
})
