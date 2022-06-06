const express= require("express")
const router = express.Router();
global.config = require('../config/config');
const documentController = require(global.config.routes.controller + "/documentController")
const validator = require('../middlewares/validator');

router.get("/",  documentController.root);
router.post("/edit/:documentId",  documentController.edit);
//router.post("/edit",  userController.root);
router.post("/delete/:documentId",  documentController.delete);
router.get("/show/:documentId",  documentController.show);
router.post("/add/:documentId",  documentController.add);


module.exports = router;
