import React from 'react';

// Fallback-Komponente für nicht gefundene Routen
const NotFound: React.FC = () => (
    <div className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Seite nicht gefunden</h2>
        <p className="mb-4">Die angeforderte Seite konnte nicht gefunden werden.</p>
        <a href="/" className="text-blue-600 hover:underline">Zurück zur Startseite</a>
    </div>
);

export default NotFound;
