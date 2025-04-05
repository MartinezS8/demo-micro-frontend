/**
 * API-Service: Stellt Funktionen zum Abrufen von Events von der Backend-API bereit.
 */
export const fetchEvents = async (httpLocalhost5001ApiEvents: string) => {
    const response = await fetch('http://localhost:5000/api/events');
    if (!response.ok) {
        throw new Error('Fehler beim Abrufen der Events');
    }
    return response.json();
};
