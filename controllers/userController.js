const sequelize = require('../config/db');
const User = require('../models/User');
const company = require('../models/Access_token');
const Access_token = require('../models/Access_token');
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { DELETE } = require('sequelize/types/query-types');
require('dotenv').config();

const controller = {
	root: (req, res) => {
    User.findAll({
      
    }
      
    ).then(Users => {
             res.send(Users);
         });
	},
    show: (req, res) => {
        User.findByPk(req.userId)
        .then(User => {
                 res.send(User);
             });
    },
    edit: (req, res) => {
        User.findByPk(req.userId)
        .then(User => {
                 res.send(User);
             });
    },
    delete: (req, res) => {
        User.findByPk(req.userId)
        .then(User => { 
            res.send(User);
             });
    },
    add: (req, res) => {
        User.findByPk(req.userId)
        .then(User => {
             res.send(User);
             });
    },
    clone: (req, res) => {
        User.findByPk(req.userId)
        .then(User => {
                 res.send(User);
             });
    },
};






module.exports = controller;