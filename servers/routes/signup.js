const express = require('express');
const router = express.Router();
const {handelUserSignUp,handelUserLogin}=require('../controller/handelAuthentication');



router.post("/signup",handelUserSignUp);
router.post("/login",handelUserLogin);

module.exports=router;