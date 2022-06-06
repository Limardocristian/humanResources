const sequelize = require('../config/db');
const Document = require('../models/Document');
const company = require('../models/Access_token');
const Access_token = require('../models/Access_token');
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const controller = {
	root: (req, res) => {
    Document.findAll({
      
    }
      
    ).then(Documents => {
             res.send(Documents);
         });
	},
    show: (req, res) => {
        Document.findByPk(req.params.documentId)
        .then(Documents => {
                 res.send(Documents);
             });
    },
    edit: (req, res) => {
        Document.update({
            id_tipo_document: req.body.id_tipo_document,
            id_tipo_status: req.body.id_tipo_status,
            id_create_Document: req.body.id_create_Document,
            id_destiny_Document: req.body.id_destiny_Document,
            id_company: req.body.id_company,
            id_management: req.body.id_management,
            id_branches: req.body.id_branches,
            file_name: req.body.file_name,
            text_note: req.body.text_note,
            view: req.body.view,
            updated_at: req.body.updated_at,
            created_at: req.body.created_at,
            
        }, {
            where: {
                id: req.params.documentId
            }
        })
        res.send("el documento: "+ req.params.documentId + ' fue modificado correctamente');

    },
    delete: (req, res) => {
        Document.destroy({
            where: {
                id: req.params.documentId
            }
        })
        res.send("el documento: "+ req.params.documentId + ' fue eliminado correctamente');
        
    },
    add: (req, res) => {
        Document.create({
            id_tipo_document: req.body.id_tipo_document,
            id_tipo_status: req.body.id_tipo_status,
            id_create_Document: req.body.id_create_Document,
            id_destiny_Document: req.body.id_destiny_Document,
            id_company: req.body.id_company,
            id_management: req.body.id_management,
            id_branches: req.body.id_branches,
            file_name: req.body.file_name,
            text_note: req.body.text_note,
            view: req.body.view,
            updated_at: req.body.updated_at,
            created_at: req.body.created_at,
            })
            .then(() => {
                res.send("el documento: "+ req.params.documentId + ' fue creado correctamente');
            })
    },
  
    
	
};

module.exports = controller;