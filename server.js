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
app.get('/api/restaurants',(request, response) =>{
  database('restaurants').select()
    .then((restaurants) =>{
      if(restaurants.length > 0){
      response.status(200).json(restaurants)
    }else{
      response.status(404).send('restaurants not found')
    }
    })
})
//all users
app.get('/api/users',(request, response) =>{
  database('users').select()
    .then((users) =>{
      if(users.length > 0){
      response.status(200).json(users)
    }else{
      response.status(404).send('users not found')
    }
    })
})
//get all reviews
app.get('/api/reviews',(request, response) =>{
  database('reviews').select()
    .then((reviews) =>{
      if(reviews.length > 0){
      response.status(200).json(reviews)
    }else{
      response.status(404).send('reviews not found')
    }
    })
})
//find reviews that a user has posted
app.get('/api/reviews/:userId', (request,response)=>{
  const { userId } = request.params
  database('reviews').where('userId', userId)
  .then((reviews) =>{
    if(reviews.length>0){
    response.status(200).json(reviews)
  }else{
    response.status(404).send('user review not found')
  }
  })
})
app.get('/api/users/:id', (request,response)=>{
  const { id } = request.params
  database('users').where('id', id)
  .then((users) =>{
    if(users.length>0){
    response.status(200).json(users)
  }else{
    response.status(404).send('ID NOT FOUND')
  }
  })
})
//find reviews for a restaurant
app.get('/api/restaurants/:id', (request,response) => {
  const { id } = request.params
  database('reviews').where('restaurantId', id)
    .then((reviews) =>{
      if(reviews.length>0){
      response.status(200).json(reviews)
    }else{
      response.status(404).send('reviews for restaurant not found')
    }
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
            console.error('Cannot post a restaurant')
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
            console.error('Cannot post a user')
        })
    })
})
//post a review
app.post('/api/reviews', (request, response)=>{
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
            console.error('Cannot post a review')
        })
    })
})

//delete a restaurant
// todo figure out catch for not throwing error if id is already deleted
app.delete('/api/restaurants/:id', (request,response)=>{
  const { id } = request.params
  database('restaurants').where('id', id).delete()
    .then(()=>{
      database('restaurants').select()
      .then((restaurants)=>{
        response.status(200).json(restaurants)
      })
    })
    .catch((error)=>{
      response.status(500)
      console.error('DELETE RESTAURANT NOT WORKING')
    })
})
//delete a user
app.delete('/api/users/:id', (request,response)=>{
  const { id } = request.params
  database('users').where('id', id).delete()
    .then(()=>{
      database('users').select()
      .then((users)=>{
        response.status(200).json(users)
      })
    })
    .catch((error)=>{
      response.status(500)
      console.error('DELETE RESTAURANT NOT WORKING')
    })
})
app.delete('/api/reviews/:id', (request,response)=>{
  const { id } = request.params
  database('reviews').where('id', id).delete()
    .then(()=>{
      database('reviews').select()
      .then((reviews)=>{
        response.status(200).json(reviews)
      })
    })
    .catch((error)=>{
      response.status(500)
      console.error('DELETE RESTAURANT NOT WORKING')
    })
})

//patch users
app.patch('/api/users/:id', (request, response)=>{
  const { id } = request.params
  const { firstname, lastname } = request.body
  database('users').where('id', id).update({ firstname , lastname })
    .then(()=>{
      database('users').where('id', id).select()
        .then(users=>{
          response.status(200).json(users)
        })
        .catch((error)=>{
          response.status(500)
          console.error('PATCH USERS BROKEN')
        })
    })
})
//patch restaurant
app.patch('/api/restaurants/:id', (request, response)=>{
  const { id } = request.params
  const { name, type } = request.body
  console.log('this is id', id, 'this is name',name, 'thisis type',type);

  database('restaurants').where('id', id).update({ name , type})
    .then(()=>{
      database('restaurants').where('id', id).select()
        .then(restaurants=>{
          response.status(200).json(restaurants)
        })
        .catch((error)=>{
          response.status(500)
          console.error('PATCH RESTAURANTS BROKEN')
        })
    })
})
app.patch('/api/reviews/:id', (request, response)=>{
  const { id } = request.params
  const { review } = request.body
  database('reviews').where('id', id).update({ review })
    .then(()=>{
      database('reviews').where('id', id).select()
        .then(reviews=>{
          response.status(200).json(reviews)
        })
        .catch((error)=>{
          response.status(500)
          console.error('PATCH REVIEWS BROKEN')
        })
    })
})




app.listen(app.get('port'), ()=>{
  console.log(`${app.locals.title} is running at ${app.get('port')}`)
})

module.exports = app
