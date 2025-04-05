const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Administrative Endpunkte: Benutzerverwaltung und Statistiken
router.get('/users', adminController.getAllUsers);
router.put('/users/:id/role', adminController.changeUserRole);
router.delete('/users/:id', adminController.deleteUser);
router.get('/stats', adminController.getStats);

module.exports = router;
