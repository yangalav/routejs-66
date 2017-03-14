module.exports = function (app, express) {
  app.get('/user', function(req, res) {
    res.json('Hello World')
  })

}
