const express = require('express');
const router = express.Router();
const challengeController = require('../controllers/challengeController');

// Endpunkte für Challenges
router.get('/', challengeController.getAllChallenges);
router.post('/', challengeController.createChallenge);
router.get('/:id', challengeController.getChallengeById);
router.put('/:id', challengeController.updateChallenge);
router.delete('/:id', challengeController.deleteChallenge);
router.post('/:id/participate', challengeController.participateChallenge);
router.delete('/:id/participate', challengeController.cancelParticipation);
router.get('/:id/participants', challengeController.getParticipants);

module.exports = router;
