import React from 'react';
import {createRoot} from 'react-dom/client';
import {createInstance, Piral, SetComponent, SetRoute} from 'piral';
import {Provider} from 'react-redux';
import {store} from './store';
import Layout from './components/Layout';
import Loader from './components/Loader';
import NotFound from './components/NotFound';
import './index.css';

// Hier definieren wir die requestPilets-Funktion, die ein Array von Pilet-Metadaten zurückgibt.
// In diesem Beispiel wird der Event-Feed dynamisch geladen.
const instance = createInstance({
    requestPilets: async () => {
        // Beispiel: Abrufen der Pilet-Daten von einem lokalen Feed-Server.
        // Stelle sicher, dass dieser Server den korrekten Link zum gebündelten Pilet (React Event Feed) zurückgibt.
        const response = await fetch('http://localhost:3001/api/pilets');
        return await response.json();
    },
    // Weitere Einstellungen (z. B. globale Komponenten) können hier hinzugefügt werden.
});

// Rendern der Piral‑Shell und Einbinden des globalen Redux‑Providers.
const rootElement = document.getElementById('app');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <Provider store={store}>
            <Piral instance={instance}>
                {/* Registriere globale Komponenten */}
                <SetComponent name="Layout" component={Layout} />
                <SetComponent name="LoadingIndicator" component={Loader} />
                <SetComponent name="ErrorInfo" component={NotFound} />
                {/* Fallback-Routen */}
                <SetRoute path="*" component={NotFound} />
            </Piral>
        </Provider>
    );
}
