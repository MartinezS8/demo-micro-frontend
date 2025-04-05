const User = require('../models/Users');

// Controller für administrative Aufgaben
exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        next(err);
    }
};

exports.changeUserRole = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { role: req.body.role }, { new: true });
        res.json(user);
    } catch (err) {
        next(err);
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

exports.getStats = async (req, res, next) => {
    try {
        const userCount = await User.countDocuments();
        res.json({ userCount });
    } catch (err) {
        next(err);
    }
};
