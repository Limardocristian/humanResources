const sequelize = require('../config/db');
const User = require('../models/User');
const company = require('../models/Access_token');
const Access_token = require('../models/Access_token');
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const controller = {
	root: (req, res) => {
    User.findAll({
      
    }
      
    ).then(Users => {
             res.send(Users);
         });
	},
  	
};

module.exports = controller;