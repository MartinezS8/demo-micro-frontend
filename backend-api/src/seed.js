/**
 * Seed-Skript für die Kulturplattform.
 * Dieses Skript verbindet sich mit der MongoDB, löscht ggf. vorhandene Events
 * und fügt Beispiel-Events ein, damit die Microfrontends später Daten anzeigen können.
 */

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Event = require('./models/Events.js');

// Umgebungsvariablen laden
dotenv.config();

// Verwende die Umgebungsvariable MONGO_URI oder setze einen Standardwert für die lokale Verbindung
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/';

// Verbindung zur MongoDB herstellen
mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('MongoDB verbunden für Seed-Daten');
        seedEvents();
    })
    .catch((err) => {
        console.error('Fehler bei der Verbindung zur MongoDB:', err);
    });

// Funktion zum Einfügen von Seed-Daten
const seedEvents = async () => {
    try {
        // Alle vorhandenen Events löschen
        await Event.deleteMany({});
        console.log('Vorhandene Events wurden gelöscht.');

        // Beispiel-Events definieren
        const events = [
            {
                title: 'Firmenjubiläum 2025',
                date: new Date('2025-06-15'),
                participants: 50,
                comments: [
                    { text: 'Freue mich auf das Event!', author: 'Max Mustermann' }
                ]
            },
            {
                title: 'Sommerfest',
                date: new Date('2025-07-10'),
                participants: 75,
                comments: [
                    { text: 'Super Idee!', author: 'Erika Musterfrau' }
                ]
            },
            {
                title: 'Kulturabend',
                date: new Date('2025-08-05'),
                participants: 40,
                comments: [
                    { text: 'Klingt spannend!', author: 'John Doe' }
                ]
            }
        ];

        // Die Beispiel-Events in die Datenbank einfügen
        const insertedEvents = await Event.insertMany(events);
        console.log(`${insertedEvents.length} Events wurden erfolgreich eingefügt.`);
    } catch (error) {
        console.error('Fehler beim Einfügen der Seed-Daten:', error);
    } finally {
        // Verbindung zur MongoDB schließen
        mongoose.connection.close();
    }
};
