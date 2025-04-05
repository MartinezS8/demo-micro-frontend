import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { toggleDarkMode } from '../store/uiSlice';

// Header-Komponente mit Navigation und Dark Mode Toggle
const Header: React.FC = () => {
    const darkMode = useSelector((state: RootState) => state.ui.darkMode);
    const dispatch = useDispatch();

    return (
        <header className={darkMode ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'}>
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <h1 className="text-xl font-bold">Kulturplattform</h1>
                <nav className="space-x-4">
                    <a href="/" className="hover:underline">Startseite</a>
                    <a href="/events" className="hover:underline">Newsfeed</a>
                </nav>
                <button
                    onClick={() => dispatch(toggleDarkMode())}
                    className="ml-4 px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
                >
                    Dark Mode: {darkMode ? 'An' : 'Aus'}
                </button>
            </div>
        </header>
    );
};

export default Header;
