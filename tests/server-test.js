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
})
