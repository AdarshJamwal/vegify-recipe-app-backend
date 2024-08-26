const express = require('express')

const router = express.Router()
const authControllers = require('../controllers/authController.js')

router.post('/signup', authControllers.signup)
router.post('/signin', authControllers.signin)
router.post('/google', authControllers.google)
router.get('/signout', authControllers.signout)


module.exports = router; 




















