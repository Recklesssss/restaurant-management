const express = require('express');
const varifyToken = require('../../../middleware/authMiddleware');
const router = express.Router();
const signUp = require('../controllers/customerSignupController')

router.post('/register',signUp.register);
router.post('/login',signUp.login);

module.exports = router;

// customer routes