const Event = require('../models/Events');

// Beispiel-Controller-Funktionen für Events
exports.getAllEvents = async (req, res, next) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        next(error);
    }
};

exports.createEvent = async (req, res, next) => {
    try {
        const event = await Event.create(req.body);
        res.status(201).json(event);
    } catch (error) {
        next(error);
    }
};

exports.getEventById = async (req, res, next) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event nicht gefunden' });
        res.json(event);
    } catch (error) {
        next(error);
    }
};

exports.updateEvent = async (req, res, next) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!event) return res.status(404).json({ message: 'Event nicht gefunden' });
        res.json(event);
    } catch (error) {
        next(error);
    }
};

exports.deleteEvent = async (req, res, next) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event nicht gefunden' });
        res.json({ message: 'Event gelöscht' });
    } catch (error) {
        next(error);
    }
};

exports.addComment = async (req, res, next) => {
    try {
        // Beispiel: Kommentare werden als Array in Event gespeichert
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event nicht gefunden' });
        event.comments.push(req.body);
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        next(error);
    }
};

exports.getComments = async (req, res, next) => {
    try {
        const event = await Event.findById(req.params.id).select('comments');
        if (!event) return res.status(404).json({ message: 'Event nicht gefunden' });
        res.json(event.comments);
    } catch (error) {
        next(error);
    }
};

exports.deleteComment = async (req, res, next) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event nicht gefunden' });
        event.comments = event.comments.filter(
            (comment) => comment._id.toString() !== req.params.commentId
        );
        await event.save();
        res.json({ message: 'Kommentar gelöscht' });
    } catch (error) {
        next(error);
    }
};
