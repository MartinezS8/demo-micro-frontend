// File: microfrontends/react-event-feed/src/hooks/useEvents.ts
import { useQuery } from 'react-query';
import {fetchEvents} from "../services/apiService";

export const useEvents = () => {
    return useQuery('events', async () => {
        const response = await fetchEvents('http://localhost:5001/api/events');
        if (!response.ok) {
            throw new Error('Fehler beim Laden der Events');
        }
        return response.json();
    });
};
