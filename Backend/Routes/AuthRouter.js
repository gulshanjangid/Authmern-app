const { siginup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

 const router = require('express').Router();

  

  router.post('/login',loginValidation, login);
  router.post('/siginUp',signupValidation,siginup);
  
  module.exports = router;