var router = require('express').Router();
var fs = require('fs');

router.get('/test', function (req, res) {
  res.send('API is working!');
});

router.get('/posts', function (req, res) {
  fs.readFile('posts.json', 'utf-8', function (err, data) {
    res.send(data);
  });
});

router.get('/post', function (req, res) {
  var post = {
    title: 'Post titel',
    content: 'Hallo dit is de content'
  }
  res.send(JSON.stringify(post));
});

module.exports = router;
