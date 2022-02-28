const createError = require('http-errors')
const express = require('express')
const path = require('path')
/* const methodOverride =  require('method-override')  */// Para poder usar los métodos PUT y DELETE

const app = express()

/* Middlewares */
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
/* app.use(methodOverride('_method')) */ // Para poder pisar el method="POST" en el formulario por PUT y DELETE

//view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Route System require and use()
const indexRouter = require('./routes/index.js')
const projectsRouter = require('./routes/projects.js')
const aboutRouter = require('./routes/about.js')
const blogRouter = require('./routes/blog.js')

//npm start
app.listen(process.env.PORT || 3030, () => console.log('Servidor corriendo'))

//home page
//localhost:3030/
app.use('/', indexRouter)

//projects page
//localhost:3030/projects
app.use('/projects', projectsRouter)

//about page
//localhost:3030/about
app.use('/about', aboutRouter)

//blog page
//localhost:3030/blog
app.use('/blog', blogRouter)

// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)))

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.path = req.path
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
});
