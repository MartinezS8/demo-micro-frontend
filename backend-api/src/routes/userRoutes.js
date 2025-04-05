const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Endpunkte für Benutzer-Operationen
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/me', userController.getProfile);
router.put('/me', userController.updateProfile);
router.post('/forgot-password', userController.forgotPassword);
router.post('/reset-password/:token', userController.resetPassword);
router.post('/logout', userController.logoutUser);

module.exports = router;
