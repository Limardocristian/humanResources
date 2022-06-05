const express= require("express")
const router = express.Router();
global.config = require('../config/config');
const userController = require(global.config.routes.controller + "/userController")
const validator = require('../middlewares/validator');

router.get("/user",  userController.root);



module.exports = router;
