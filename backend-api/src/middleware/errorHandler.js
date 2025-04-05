// Zentrale Fehlerbehandlung: Loggt den Fehler und sendet eine JSON-Antwort
module.exports = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error'
    });
};
