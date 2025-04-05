// Authentifizierungs-Middleware (Basisimplementierung)
// Hinweis: Da Login nicht implementiert wird, dient dies als Platzhalter.
module.exports = (req, res, next) => {
    // Beispiel: Überprüfen eines Authorization-Headers (optional)
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Keine Berechtigung' });
    }
    // Bei Bedarf JWT-Validierung hier einfügen
    next();
};
