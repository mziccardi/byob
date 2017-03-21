const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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


app.listen(app.get('port'), ()=>{
  console.log(`${app.locals.title} is running at ${app.get('port')}`)
})
