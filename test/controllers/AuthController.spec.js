var AuthController = require('../../api/controllers/AuthController');
var sinon = require('sinon');
var assert = require('chai').assert;
describe('The AuthController', function() {
  describe('when we invoke the index action', function() {
    it('return an error response if no password or email is provided', function() {
      var param = sinon.spy();
      var json = sinon.spy();

      var req =  {
        'param' : param
      };

      var res = {
        'json' : json
      };

      AuthController.index(req, res);
      assert(json.calledOnce);
      assert(json.calledWith(401, {err: 'email and password required'}));
    });
  });
});
