const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');

// Umgebungsvariablen laden
dotenv.config();

const app = express();

// Middleware-Konfiguration
app.use(express.json());
app.use(cors());
app.use(helmet());

// MongoDB-Verbindung herstellen
mongoose
    .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/kulturplattform', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB verbunden'))
    .catch((err) => console.error('MongoDB-Verbindungsfehler:', err));

// API-Routen registrieren
app.use('/api/events', require('./routes/eventsRoutes'));
app.use('/api/auth', require('./routes/userRoutes'));
app.use('/api/challenges', require('./routes/challengeRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Zentrale Fehlerbehandlung
app.use(errorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Backend läuft auf Port ${PORT}`);
});
