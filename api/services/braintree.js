/**
 * service for connecting with braintree
 *
 */

var braintree = require('braintree');
var secure = require('../../config/secure').secure;
var Promise = require('bluebird');


var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: secure.merchantID,
  publicKey: secure.publicKey,
  privateKey: secure.privateKey
});

module.exports = {
  issueBraintreeToken : function (userId) {
    return new Promise(function (resolve, reject) {
      gateway.clientToken.generate({}, function (err, response) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          var token = response.clientToken;
          resolve(token);
        }
      });
    });
  },
  checkout : function (nonce) {
    return new Promise(function (resolve, reject) {
      gateway.transaction.sale({
        amount: '10.00',
        paymentMethodNonce: nonce,
      }, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    });
  }
}
