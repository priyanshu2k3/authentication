const express = require('express');
const router = express.Router();
const {handelUserSignUp,handelUserLogin}=require('../controller/handelAuthentication');
const {handelUpdate}=require('../controller/handelUpdate.js');
const {restrictToLoggedInUser}=require("../middleware/auth")//middleware
const {allowCrossDomain}=require("../middleware/corsMiddleware")



router.post("/signup",handelUserSignUp);
router.post("/login",handelUserLogin);
router.post("/update",restrictToLoggedInUser,handelUpdate);


module.exports=router;