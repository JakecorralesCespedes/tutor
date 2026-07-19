const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Determinar la ruta correcta del archivo
const htmlPath = path.join(__dirname, 'reino-del-saber.html');

// Servir archivos estáticos (imágenes JPG)
app.use(express.static(path.join(__dirname)));

// Ruta principal
app.get('/', (req, res) => {
    try {
        if (fs.existsSync(htmlPath)) {
            res.sendFile(htmlPath);
        } else {
            res.status(404).send('Error: archivo reino-del-saber.html no encontrado');
        }
    } catch (err) {
        res.status(500).send('Error interno del servidor');
    }
});

// Ruta fallback
app.get('*', (req, res) => {
    try {
        if (fs.existsSync(htmlPath)) {
            res.sendFile(htmlPath);
        } else {
            res.status(404).send('Error: archivo reino-del-saber.html no encontrado');
        }
    } catch (err) {
        res.status(500).send('Error interno del servidor');
    }
});

app.listen(PORT, () => {
    console.log(`🎮 Reino del Saber escuchando en puerto ${PORT}`);
    console.log(`📂 Sirviendo desde: ${__dirname}`);
});

