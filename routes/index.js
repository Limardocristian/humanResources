const express= require("express")
const router = express.Router();
global.config = require('../config/config');
const homeController = require(global.config.routes.controller + "/indexController")
const validator = require('../middlewares/validator');

router.get("/",  homeController.root);
router.post("/login",validator.login, homeController.login );
router.post("/register", validator.register, homeController.register );
router.post("/testing", homeController.testing );
// , validator.register


module.exports = router;
