const express = require('express');
const authController = require('../controller/authController')
const router = express.Router();

/**
 * GET /
 * Signup
 */

router.get('/signup', authController.signup_get)

/**
 * POST /
 * Signup
 */

router.post('/signup', authController.signup_post)

/**
 * GET /
 * Login
 */

router.get('/login', authController.login_get)

/**
 * POST /
 * Login
 */

router.post('/login', authController.login_post)

module.exports = router;