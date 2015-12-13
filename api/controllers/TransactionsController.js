module.exports = {
  issue: function (req, res) {
    braintree.issueBraintreeToken("1").then(function(token){
      res.ok({token: token})
    }, function(err) {
      res.error(err)
    });
  },
  checkout : function (req, res) {
    braintree.checkout("fake-valid-nonce").then(function(result){
      res.ok()
    }, function(err) {
      res.error(err)
    });
  }
};
