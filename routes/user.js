const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const privacyPolicy = require('../middlewares/privacyPolicy');

router.post('/users', privacyPolicy, UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/admin/users/:id',UserController.getUserById);
router.get('/users/:id', UserController.getUserByIdCliente)
router.put('/users/:id', privacyPolicy, UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;
