const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const generateQRCode = require('./qr.js');
const stableDiffusion = require('./sd.js');

app.post('/generate', async (req, res) => {
    const url = req.body.url;
    const prompt = req.body.prompt;
    const qrcode = generateQRCode(url);
    const qrcode_sd = stableDiffusion(qrcode, prompt);
});

app.listen(port, () => {
    console.log('App listening')
});