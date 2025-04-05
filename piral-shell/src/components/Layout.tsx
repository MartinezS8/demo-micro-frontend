import React from 'react';
import Header from './Header';
import Footer from './Footer';

// Globales Layout: Umfasst Header, Hauptinhalt und Footer
const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
