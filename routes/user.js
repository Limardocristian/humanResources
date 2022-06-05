const express= require("express")
const router = express.Router();
global.config = require('../config/config');
const userController = require(global.config.routes.controller + "/userController")
const validator = require('../middlewares/validator');

router.get("/",  userController.root);
router.post("/edit",  userController.root);
router.post("/edit",  userController.root);
router.post("/delete",  userController.root);
router.post("/see",  userController.root);




module.exports = router;
