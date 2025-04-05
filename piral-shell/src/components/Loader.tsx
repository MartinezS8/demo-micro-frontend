import React from 'react';

// Einfache Loader-Komponente (Spinner), die während des Ladens angezeigt wird
const Loader: React.FC = () => (
    <div className="flex items-center justify-center p-4">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" role="status" aria-label="loading" />
    </div>
);

export default Loader;
