const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');
// const session = require('express-session');
const flash = require('connect-flash');





//settings
app.set('port', process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));

//middleware
app.use(morgan('dev'));//muestra en consola peticiones del cliente
app.use(cors());
app.use(express.json());//pasear peticiones json
app.use(express.urlencoded({ extended: true }));



// Configurar cabeceras y cors

// app.use(session({
// 	secret: 'Redis$ecretP@ssword2020',
// 	resave: false,
// 	saveUninitialized: false
// }));

//routers
app.use("/registro", require("./routers/register.routes"));




//variables globales
// app.use((req, res, next) => {
// 	// res.locals.driver=req.flash('driver');
// 	res.locals.user = req.user || null;
// 	next();
// });

//validacion de codigo

//logger




module.exports = app;