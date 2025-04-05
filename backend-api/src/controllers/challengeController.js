const Challenge = require('../models/Challenge');

// Controller für Challenge-Operationen
exports.getAllChallenges = async (req, res, next) => {
    try {
        const challenges = await Challenge.find();
        res.json(challenges);
    } catch (err) {
        next(err);
    }
};

exports.createChallenge = async (req, res, next) => {
    try {
        const challenge = new Challenge(req.body);
        await challenge.save();
        res.status(201).json(challenge);
    } catch (err) {
        next(err);
    }
};

exports.getChallengeById = async (req, res, next) => {
    try {
        const challenge = await Challenge.findById(req.params.id);
        if (!challenge) return res.status(404).json({ message: 'Challenge not found' });
        res.json(challenge);
    } catch (err) {
        next(err);
    }
};

exports.updateChallenge = async (req, res, next) => {
    try {
        const challenge = await Challenge.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!challenge) return res.status(404).json({ message: 'Challenge not found' });
        res.json(challenge);
    } catch (err) {
        next(err);
    }
};

exports.deleteChallenge = async (req, res, next) => {
    try {
        const challenge = await Challenge.findByIdAndDelete(req.params.id);
        if (!challenge) return res.status(404).json({ message: 'Challenge not found' });
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

exports.participateChallenge = async (req, res, next) => {
    try {
        res.json({ message: 'Participation added (stub)' });
    } catch (err) {
        next(err);
    }
};

exports.cancelParticipation = async (req, res, next) => {
    try {
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

exports.getParticipants = async (req, res, next) => {
    try {
        res.json({ participants: [] });
    } catch (err) {
        next(err);
    }
};
