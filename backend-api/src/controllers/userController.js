const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Controller für Benutzer-Operationen
exports.registerUser = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({ ...req.body, password: hashedPassword });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
};

exports.loginUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(401).json({ message: 'Invalid credentials' });
        const isValid = await bcrypt.compare(req.body.password, user.password);
        if (!isValid) return res.status(401).json({ message: 'Invalid credentials' });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        next(err);
    }
};

exports.getProfile = async (req, res, next) => {
    try {
        res.json(req.user); // Annahme: req.user wird von Auth-Middleware gesetzt
    } catch (err) {
        next(err);
    }
};

exports.updateProfile = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.user._id, req.body, { new: true });
        res.json(user);
    } catch (err) {
        next(err);
    }
};

exports.forgotPassword = async (req, res, next) => {
    try {
        res.json({ message: 'Password reset link sent (stub)' });
    } catch (err) {
        next(err);
    }
};

exports.resetPassword = async (req, res, next) => {
    try {
        res.json({ message: 'Password has been reset (stub)' });
    } catch (err) {
        next(err);
    }
};

exports.logoutUser = async (req, res, next) => {
    try {
        res.json({ message: 'User logged out (stub)' });
    } catch (err) {
        next(err);
    }
};
