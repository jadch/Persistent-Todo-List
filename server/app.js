const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const path = require('path')
const history = require('express-history-api-fallback')

const app = express()

app.use(logger('dev'))
app.use(cookieParser())

const clientRoot = path.join(__dirname, '../todo/build')
app.use('/', express.static(clientRoot))
app.use(history('index.html', { root: clientRoot }))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
