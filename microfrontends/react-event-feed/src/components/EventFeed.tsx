import React from 'react';
import EventCard from './Eventcard';
import { useEvents } from '../hooks/useEvents';

/**
 * EventFeed-Komponente:
 * Zeigt eine Liste von Events an, basierend auf den von useEvents geladenen Daten.
 */
const EventFeed: React.FC = () => {
    const { data, isLoading, error } = useEvents();

    if (isLoading) {
        return <div>Lade Events...</div>;
    }

    if (error) {
        return <div>Fehler beim Laden der Events.</div>;
    }

    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data && data.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    );
};

export default EventFeed;
