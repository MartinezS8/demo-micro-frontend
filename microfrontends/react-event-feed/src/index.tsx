import React from 'react';
import {createPiletOptions } from 'piral';
import EventFeed from './components/EventFeed';

function createPilet(param: { name: string; setup(api): void; version: string }) {
    
}

// Erstelle den Pilet und registriere die Route "/events"
createPilet({
    name: 'react-event-feed',
    version: '1.0.0',
    setup(api) {
        // Registriere die Newsfeed-Seite in der Piral-Shell
        api.registerPage('/events', EventFeed);
    }
});
