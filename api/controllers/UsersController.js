/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function (req, res) {
    if (req.param('password') !== req.param('confirmPassword')) {
      return res.json(401, {err: 'Passwords must match exactly'});
    }
    Users.create(req.allParams()).exec(function (err, user) {
      if (err) {
        return res.json(err.status, {err: err});
      }

      if (user) {
        res.json(200, {user: user, token: jwToken.issue({id: user.id})});
      }
    });
  }

};

