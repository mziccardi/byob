process.env.NODE_ENV = 'test'
const config = require('../knexfile.js')['test']
const knex = require('knex')(config)

const chai = require('chai');
const expect = chai.expect;
const app = require('../server.js')
const chaiHttp = require('chai-http');
const configuration = require('../knexfile')['test'];
const database = require('knex')(configuration);

chai.use(chaiHttp);


describe('GET /api/restaurants', ()=>{
  beforeEach(function(done) {
  knex.migrate.rollback()
  .then(function() {
    knex.migrate.latest()
    .then(function() {
      return database.seed.run()
      .then(function() {
        done();
      });
    });
  });
});
afterEach((done)=>{
  knex.migrate.rollback()
  .then(()=>{
    done()
  })
})
  it('should return all restaurants',(done)=>{
    chai.request(app)
    .get('/api/restaurants')
    .end((err,res)=>{
      if(err) {done(err)}
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body).to.have.length(30)
      done()
    })
  })
})
describe('GET /api/users', ()=>{
  beforeEach(function(done) {
  knex.migrate.rollback()
  .then(function() {
    knex.migrate.latest()
    .then(function() {
      return database.seed.run()
      .then(function() {
        done();
      });
    });
  });
});
afterEach((done)=>{
  knex.migrate.rollback()
  .then(()=>{
    done()
  })
})
  it('should return all users',(done)=>{
    chai.request(app)
    .get('/api/users')
    .end((err,res)=>{
      if(err) {done(err)}
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body).to.have.length(30)
      done()
    })
  })
  it('/api/users/:id should get a specific user',(done)=>{
    chai.request(app)
    .get('/api/users/1')
    .end((err,res)=>{
      if(err){done(err)}
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body).to.have.length(1)
      done()
    })
  })
  it('/api/users/:id should return an error if the ID does not exist', (done) => {
      chai.request(app)
      .get('/api/users/200')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done()
      })
    })
})
describe('GET /api/reviews', ()=>{
  beforeEach(function(done) {
  knex.migrate.rollback()
  .then(function() {
    knex.migrate.latest()
    .then(function() {
      return database.seed.run()
      .then(function() {
        done();
      });
    });
  });
});
afterEach((done)=>{
  knex.migrate.rollback()
  .then(()=>{
    done()
  })
})
  it('should return all reviews',(done)=>{
    chai.request(app)
    .get('/api/reviews')
    .end((err,res)=>{
      if(err) {done(err)}
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body).to.have.length(30)
      done()
    })
  })
  it('/api/reviews/:userid should return an error if the ID does not exist', (done) => {
      chai.request(app)
      .get('/api/reviews/200')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done()
      })
    })
})





describe('GET /api/reviews/:userId', ()=>{
  beforeEach(function(done) {
    knex.migrate.rollback()
    .then(function(){
      knex.migrate.latest()
      .then(function(){
        return database.seed.run()
        .then(function(){
          done()
        })
      })
    })
  })
  afterEach ((done)=>{
    knex.migrate.rollback()
    .then(()=>{
      done()
    })
  })
  it('should return a users reviews',(done)=>{
    chai.request(app)
    .get('/api/reviews/1')
    .end((err,res)=>{
      if(err) {done(err)}
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body).to.have.length(1)
      done()
    })
  })
})
describe(' GET /api/restaurants/:id/reviews', ()=>{
  beforeEach(function(done) {
    knex.migrate.rollback()
    .then(function(){
      knex.migrate.latest()
      .then(function(){
        return database.seed.run()
        .then(function(){
          done()
        })
      })
    })
  })
  afterEach ((done)=>{
    knex.migrate.rollback()
    .then(()=>{
      done()
    })
  })
  it('should return reviews for a restaurant',(done)=>{
    chai.request(app)
    .get('/api/restaurants/1/reviews')
    .end((err,res)=>{
      if(err) {done(err)}
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body).to.have.length(1)
      done()
    })
  })
  it('/api/restaurants/:id should return an error if the ID does not exist', (done) => {
      chai.request(app)
      .get('/api/restaurants/200')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done()
      })
    })
})

describe('POST /api/restaurants',()=>{
  beforeEach(function(done) {
  knex.migrate.rollback()
  .then(function() {
    knex.migrate.latest()
    .then(function() {
      return database.seed.run()
      .then(function() {
        done();
      });
    });
  });
});
afterEach((done)=>{
  knex.migrate.rollback()
  .then(()=>{
    done()
  })
})
  it('should add a restaurant to the array',(done)=>{
    chai.request(app)
    .post('/api/restaurants')
    .send({
      name: 'new place',
      type: 'breakfast',
      created_at: new Date
    })
    .end((err,res)=>{
      if(err){ done(err) }
      expect(res).to.have.status(200)
      expect(res.body).to.have.length(31)
      done();
    })
  })
})
describe('POST /api/users',()=>{
  beforeEach(function(done) {
  knex.migrate.rollback()
  .then(function() {
    knex.migrate.latest()
    .then(function() {
      return database.seed.run()
      .then(function() {
        done();
      });
    });
  });
});
afterEach((done)=>{
  knex.migrate.rollback()
  .then(()=>{
    done()
  })
})
  it('should add a user to the array',(done)=>{
    chai.request(app)
    .post('/api/users')
    .send({
      firstname: 'test name',
      lastname: 'test last name',
      created_at: new Date
    })
    .end((err,res)=>{
      if(err){ done(err) }
      expect(res).to.have.status(200)
      expect(res.body).to.have.length(31)
      done();
    })
  })
})
describe('POST /api/reviews',()=>{
  beforeEach(function(done) {
  knex.migrate.rollback()
  .then(function() {
    knex.migrate.latest()
    .then(function() {
      return database.seed.run()
      .then(function() {
        done();
      });
    });
  });
});
afterEach((done)=>{
  knex.migrate.rollback()
  .then(()=>{
    done()
  })
})
  it('should add a review to the array',(done)=>{
    chai.request(app)
    .post('/api/reviews')
    .send({
      restaurantId: 2,
      userId: 2,
      review:'THIS IS A TEST REVIEW ',
      created_at: new Date
    })
    .end((err,res)=>{
      if(err){ done(err) }
      expect(res).to.have.status(200)
      expect(res.body).to.have.length(31)
      done();
    })
  })
})
describe('DELETE /api/restaurants/:id', () => {
  beforeEach(function(done) {
  knex.migrate.rollback()
  .then(function() {
    knex.migrate.latest()
    .then(function() {
      return database.seed.run()
      .then(function() {
        done();
      });
    });
  });
});
afterEach((done)=>{
  knex.migrate.rollback()
  .then(()=>{
    done()
  })
})
  it('should delete record that matches ID', (done) => {
     chai.request(app)
     .delete('/api/restaurants/30')
     .end((err, res) => {
       if(err) { done(err) }
       expect(res).to.have.status(200);
       expect(res).to.be.json;
       expect(res.body).to.be.a('array');
      //  expect(res.body).to.have.length(29);
       done();
     })
   })
})
describe('DELETE /api/users/:id', () => {
  beforeEach(function(done) {
  knex.migrate.rollback()
  .then(function() {
    knex.migrate.latest()
    .then(function() {
      return database.seed.run()
      .then(function() {
        done();
      });
    });
  });
});
afterEach((done)=>{
  knex.migrate.rollback()
  .then(()=>{
    done()
  })
})
  it('should delete user that matches ID', (done) => {
     chai.request(app)
     .delete('/api/users/1')
     .end((err, res) => {
       if(err) { done(err) }
       expect(res).to.have.status(200);
       expect(res).to.be.json;
       expect(res.body).to.be.a('array');
      //  expect(res.body).to.have.length(29);
       done();
     })
   })
})
describe('DELETE /api/reviews/:id', () => {
//   beforeEach(function(done) {
//   knex.migrate.rollback()
//   .then(function() {
//     knex.migrate.latest()
//     .then(function() {
//       return database.seed.run()
//       .then(function() {
//         done();
//       });
//     });
//   });
// });
// afterEach((done)=>{
//   knex.migrate.rollback()
//   .then(()=>{
//     done()
//   })
// })
  it.only('should delete review that matches ID', (done) => {
     chai.request(app)
     .delete('/api/reviews/1')
     .end((err, res) => {
       if(err) { done(err) }
       expect(res).to.have.status(200);
       expect(res).to.be.json;
       expect(res.body).to.be.a('array');
       done();
     })
   })
})
