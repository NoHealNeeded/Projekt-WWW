// npm init -y
// npm install express pg cors
// erstellt Ordner 'node_modules', package-lock.json, package.json

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;

//Middleware
app.use(cors());
app.use(express.json());

//PostgreSQL-Verbindung
const pool = new Pool({
    user: 'max',
    host: 'localhost',
    database: 'searchgame',
    password: 'max',
    port: 5432
});

//Route zum Abrufen von Bilddaten
app.get('/api/image', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM images LIMIT 1');
        res.json(result.rows[0]);
        console.log(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.get('/api/imageInfo', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM imageInfos;');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.listen(port, () => {
    console.log('Server running at http://localhost:${port}');
});
