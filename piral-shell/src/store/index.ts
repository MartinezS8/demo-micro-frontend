import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';

// Konfiguriere den Redux Store mit dem UI-Slice
export const store = configureStore({
    reducer: {
        ui: uiReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
