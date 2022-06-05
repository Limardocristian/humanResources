const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3001;
const morgan = require('morgan')



app.listen(port,()=>{
    console.log('la aplicacion esta en linea!');
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

global.config = require('./config/config');


const indexRoutes = require(global.config.routes.route + 'index');
const userRoutes = require(global.config.routes.route + 'user');
const documentRoutes = require(global.config.routes.route + 'document');



app.use('/', indexRoutes);
app.use('/user/', userRoutes);
app.use('/document/', documentRoutes);

 