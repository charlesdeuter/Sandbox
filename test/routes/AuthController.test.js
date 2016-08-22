var request = require('supertest');
var assert = require('chai').assert;
describe('The AuthController', function() {
  describe('when we invoke the index action', function() {
    it('return an error response if no password or email is provided', function() {
      var testParams = {
        email : undefined,
        password: undefined
      }

      request(sails.hooks.http.app)
        .post('/auth')
        .send(testParams)
        .expect(401);
    });
  });
});
