/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

// Assertion style

chai.should();

chai.use(chaiHttp);

describe('user Api', () => {
  describe('GET /user', () => {
    it('It should get all the users', (done) => {
      chai.request(app)
        .get('/user')
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          done();
        });
    });

    describe('GET /user/:id', () => {
      it('Should return a specific user', (done) => {
        chai.request(app)
          .get(`/user/${2}`)
          .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.a('array');
            done();
          });
      });
    });

    describe('POST /Register', () => {
      it('Should create an user', (done) => {
        user = {
          firstName: 'Ayush',
          lastName: 'Kumar',
          email: 'ayush@gmail.com',
          phoneNo: '936778968967',
          password: 'Akayush',
        };
        chai.request(app)
          .post('/Register')
          .send(user)
          .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.a('array');
            done();
          });
      });
    });

    describe('UPDATE /user/:id', () => {
      it('Should return the update user ', (done) => {
        user = {
          firstName: 'Ayush',
          lastName: 'kumar',
          email: 'Ayush@1234.com',
          phoneNo: '3883692869286',
          password: 'ayush@12345',
        };
        chai.request(app)
          .put(`/user/${2}`)
          .send(user)
          .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.a('array');
            done();
          });
      });
    });

    describe('DELETE /user/:id', () => {
      it('should DELETE and existing user', (done) => {
        chai.request(app)
          .delete(`/user/${2}`)
          .end((err, response) => {
            response.should.have.status(200);
            done();
          });
      });
    });
  });
});
