const express= require("express")
const router = express.Router();
global.config = require('../config/config');
const userController = require(global.config.routes.controller + "/userController")
const validator = require('../middlewares/validator');

router.get("/",  userController.root);
router.post("/edit/:userId",  userController.edit);
//router.post("/edit",  userController.root);
router.post("/delete/:userId",  userController.delete);
router.get("/show/:userId",  userController.show);
router.post("/add/:userId",  userController.add);




module.exports = router;
