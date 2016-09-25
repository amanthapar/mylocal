var express = require('express')
  , router = express.Router();

router.get('/test', function(req, res) {
  res.send("Hello World");
});

router.get('/login', function(req, res) {
  res.send(200, "From server");
});

module.exports = router;