const express = require('express');
const {Signup, Login} = require('../controllers/Signin.js');
const router = express.Router();
router.post("/",Signup);
module.exports = router;