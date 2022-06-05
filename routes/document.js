const express= require("express")
const router = express.Router();
global.config = require('../config/config');
const documentController = require(global.config.routes.controller + "/documentController")
const validator = require('../middlewares/validator');

router.get("/document",  documentController.root);



module.exports = router;
