/**
 * PostsController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function (req, res) {
    if (!req.user) {
      return res.json(401, {err: 'user required to create message'});
    }
    message = req.allParams();
    message.author = req.user;

    Messages.create(message).exec(function (err, message) {
      if (err) {
        return res.json(err.status, {err: err});
      }

      if (message) {
        res.json(200, message);
      }
    });
  }
};

