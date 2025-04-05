const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    date: { type: Date, required: true },
    participants: { type: Number, default: 0 },
    comments: [commentSchema]
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
