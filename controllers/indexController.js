const sequelize = require('../config/db');
const User = require('../models/User');
const company = require('../models/Access_token');
const Access_token = require('../models/Access_token');
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const homeController = require('./class/indexClassObjet')


const controller = {
	root: (req, res) => { 
    User.findAll({
      
    }
      
    ).then(Users => {
             res.send(Users);
         });
	},
  login: function (req, res) { 
    return res.send( User.findAll({ where: { email: req.body.email } }) );
    const errors = validationResult(req);
    // const {email, password} = req.body
    // const user ={email:email}
    // const accesToken = generateAccessToken(user);
    // res.send('authorization',accesToken).json({
    //   message:'usuario autenticado',
    //   token: token
    // })
    if(errors.isEmpty()){
      // LOGUEO AL USUARIO ETC
      return User.findOne({ where: { email: req.body.email } }).then(
        user => { 
          delete user.password;

          req.session.user = user; // YA ESTÁ EN SESION
    
          if (req.body.remember) { //si toco el campo remember que se encuentra en body 
            // Creo la cookie
    
           
    
          }
          return Promise.resolve(user); 
        }).then(() => {return res.send('hola');})

      

    } else {
        
      return res.send(errors);

      // return res.send("login");
    }
    },
  generateAccessToken: function (user) { 
    return jwt.sign(user,process.env.DB_HOST,{expiresIn:'5m'});
  },

  register: function (req, res) { 
    const errors = validationResult(req);
    if (errors.isEmpty()) { 
    req.body.password = bcrypt.hashSync(req.body.password, 10);
      User.create({
          email: req.body.email,
          password: req.body.password,
      })
      .then(() => {
        return res.send('el usuario se creo correctamente');
      })
    } else {
      return res.send(errors);
    }

  },
  testing: function (req, res) { 
    // User.findAll({
    //       order:[['id','ASC']],
    //       where: {  

    //         name: req.body.name ? req.body.name : null,
    //       }
          
    //       },
         
    //   // 
    //   //   where:comuna 
    //   // }
    
      
    // ).then(Users => {
    //        res.send(Users);             
    //      });
    var hola = homeController.root()
    return hola;
  },

   
    
	
};

module.exports = controller;