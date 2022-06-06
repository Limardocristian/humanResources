const sequelize = require('../config/db');
const User = require('../models/User');
const company = require('../models/Access_token');
const Access_token = require('../models/Access_token');
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
// const { DELETE } = require('sequelize/types/query-types');
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
        User.findByPk(req.params.userId)
        .then(User => {
                 res.send(User);
             });
    },
    edit: (req, res) => {
        User.update({
            name: req.body.name,
            last_name: req.body.last_name,
            profile: req.body.profile,
            document_type: req.body.document_type,
            document_no: req.body.document_no,
            email: req.body.email,
            password: req.body.password,
            area_code: req.body.area_code,
            phone: req.body.phone,
            company_id: req.body.company_id,
            branch_id: req.body.branch_id,
            management_id: req.body.management_id,
            signature_certificate: req.body.signature_certificate,
            key_secret: req.body.key_secret,
            firmaDigital: req.body.firmaDigital,
            status: req.body.status,
            admission_date: req.body.admission_date,
            discharge_date: req.body.discharge_date,
            created_at: req.body.created_at,
            updated_at: req.body.updated_at,
        }, {
            where: {
                id: req.params.userId
            }
        })
        res.send("el usuario: "+ req.params.userId + ' fue modificado correctamente');

    },
    delete: (req, res) => {
        User.destroy({
            where: {
                id: req.params.userId
            }
        })
        res.send("el usuario: "+ req.params.userId + ' fue eliminado correctamente');
        
    },
    add: (req, res) => {
        User.create({
            name: req.body.name,
            last_name: req.body.last_name,
            profile: req.body.profile,
            document_type: req.body.document_type,
            document_no: req.body.document_no,
            email: req.body.email,
            password: req.body.password,
            area_code: req.body.area_code,
            phone: req.body.phone,
            company_id: req.body.company_id,
            branch_id: req.body.branch_id,
            management_id: req.body.management_id,
            signature_certificate: req.body.signature_certificate,
            key_secret: req.body.key_secret,
            firmaDigital: req.body.firmaDigital,
            status: req.body.status,
            admission_date: req.body.admission_date,
            discharge_date: req.body.discharge_date,
            })
            .then(() => {
                res.send("el usuario: "+ req.params.userId + ' fue creado correctamente');
            })
    },
    

};






module.exports = controller;