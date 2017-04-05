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
  it(' should return an error if restaurants not found', (done)=>{
    chai.request(app)
    .get('/api/restrantss')
    .end((err,res)=>{
      expect(res).to.have.status(404)
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
  it(' should return an error if users not found', (done)=>{
    chai.request(app)
    .get('/api/usrs')
    .end((err,res)=>{
      expect(res).to.have.status(404)
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
  it(' should return an error if reviews not found', (done)=>{
    chai.request(app)
    .get('/api/reveiws')
    .end((err,res)=>{
      expect(res).to.have.status(404)
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
    .get('/api/restaurants/1')
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
  it('should return an error if posts fails', (done) => {
      chai.request(app)
      .post('/api/restrants/30')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done()
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
  it('should return an error if posting a user  fails', (done) => {
      chai.request(app)
      .post('/api/usres')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done()
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
  it('should return an error if posting a review fails', (done) => {
      chai.request(app)
      .post('/api/reveiw')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done()
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
  it('should delete record that matches ID', () => {
     chai.request(app)
     .delete('/api/restaurants/30')
     .end((err, res) => {
       if(err) { done(err) }
       expect(res).to.have.status(200);
       expect(res).to.be.json;
       expect(res.body).to.be.a('array');
       expect(res.body).to.have.length(29);
       done();
     })
   })
   it('should return an error if delete restaurant fails', (done) => {
       chai.request(app)
       .post('/api/restaurants/400')
       .end((err, res) => {
         expect(res).to.have.status(404);
         expect(res.body).to.be.a('object');
         done()
       })
     })
})
describe('DELETE /api/users/:id', (done) => {
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
  it('should delete user that matches ID', () => {
     chai.request(app)
     .delete('/api/users/20')
     .end((err, res) => {
       if(err) { done(err) }
       expect(res).to.have.status(200);
       expect(res).to.be.json;
       expect(res.body).to.be.a('array');
       expect(res.body).to.have.length(29);
       done();
     })
   })
   it('should return an error if delete user fails', (done) => {
       chai.request(app)
       .post('/api/usres/4')
       .end((err, res) => {
         expect(res).to.have.status(404);
         expect(res.body).to.be.a('object');
         done()
       })
     })
})
describe('DELETE /api/reviews/:id', () => {
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
  it('should delete review that matches ID', (done) => {
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
   it('should return an error if delete review fails', (done) => {
       chai.request(app)
       .post('/api/reveiws/4')
       .end((err, res) => {
         expect(res).to.have.status(404);
         expect(res.body).to.be.a('object');
         done()
       })
     })
})
describe('PATCH /api/users/:id',()=>{
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
  it('should update a users to the array',(done)=>{
    chai.request(app)
    .patch('/api/users/4')
    .send({
      firstname: 'test name',
      lastname: 'test last name',
      created_at: new Date
    })
    .end((err,res)=>{
      if(err){ done(err) }
      expect(res).to.have.status(200)
      expect(res.body[0].firstname).to.equal('test name')
      expect(res.body[0].lastname).to.equal('test last name')
      done();
    })
  })
  it('should return an error if patch users fails', (done) => {
      chai.request(app)
      .patch('/api/users/101')
      .send({
        firstname: 'test name',
        lastname: 'test last name',
        created_at: new Date
      })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done()
      })
    })
})
describe('PATCH /api/restaurants/:id',()=>{
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
  it('should update a restaurants to the array',(done)=>{
    chai.request(app)
    .patch('/api/restaurants/4')
    .send({
      name: 'steves snappin dogs',
      type: 'hotdogs',
      created_at: new Date
    })
    .end((err,res)=>{
      if(err){ done(err) }
      expect(res).to.have.status(200)
      expect(res.body[0].name).to.equal('steves snappin dogs')
      expect(res.body[0].type).to.equal('hotdogs')
      done();
    })
  })
  it('should return an error if patch restaurants fails', (done) => {
      chai.request(app)
      .patch('/api/restaurants/101')
      .send({
        name: 'steves snappin dogs',
        type: 'hotdogs',
        created_at: new Date
      })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done()
      })
    })
})
describe('PATCH /api/reviews/:id',()=>{
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
  it('should update a reviews to the array',(done)=>{
    chai.request(app)
    .patch('/api/reviews/4')
    .send({
      restaurantId: '4',
      userId: '4',
      review: 'This is the patched review',
      created_at: new Date
    })
    .end((err,res)=>{
      if(err){ done(err) }
      expect(res).to.have.status(200)
      expect(res.body[0].review).to.equal('This is the patched review')
      done();
    })
  })
  it('should return an error if patch reviews fails', (done) => {
      chai.request(app)
      .patch('/api/reviews/101')
      .send({
        restaurantId: '4',
        userId: '4',
        review: 'This is the patched review',
        created_at: new Date
      })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done()
      })
    })
})
