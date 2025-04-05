import React from 'react';

interface Event {
    id: string;
    title: string;
    date: string;
    participants: number;
}

/**
 * EventCard-Komponente:
 * Stellt ein einzelnes Event als Card dar.
 */
const EventCard: React.FC<{ event: Event }> = ({ event }) => {
    return (
        <div className="border p-4 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold">{event.title}</h3>
            <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
            <p className="mt-2">Teilnehmer: {event.participants}</p>
        </div>
    );
};

export default EventCard;
