import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Loader from './components/Loader';
import NotFound from './components/NotFound';

const App = () => (
    <Layout>
        <Header />
        {/* Weitere Komponenten oder Routen können hier eingebunden werden */}
        <Loader />
        <NotFound />
        <Footer />
    </Layout>
);

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
