const express = require('express'); 
const router = express.Router()

const userController = require('../controllers/userController.js');
const verifyToken = require('../../utils/verifyUser.js');


router.get('/', userController.test);
router.post('/update/:id', verifyToken, userController.updateUser);
router.delete('/delete/:id', verifyToken, userController.deleteUser);


module.exports = router;







































