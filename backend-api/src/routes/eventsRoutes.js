const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// GET /api/events - Alle Events abrufen
router.get('/', eventController.getAllEvents);

// POST /api/events - Neues Event erstellen (Admin)
router.post('/', eventController.createEvent);

// GET /api/events/:id - Einzelnes Event abrufen
router.get('/:id', eventController.getEventById);

// PUT /api/events/:id - Event aktualisieren (Admin)
router.put('/:id', eventController.updateEvent);

// DELETE /api/events/:id - Event löschen (Admin)
router.delete('/:id', eventController.deleteEvent);

// POST /api/events/:id/comments - Kommentar hinzufügen
router.post('/:id/comments', eventController.addComment);

// GET /api/events/:id/comments - Kommentare abrufen
router.get('/:id/comments', eventController.getComments);

// DELETE /api/events/:id/comments/:commentId - Kommentar löschen (eigenen/Admin)
router.delete('/:id/comments/:commentId', eventController.deleteComment);

module.exports = router;
