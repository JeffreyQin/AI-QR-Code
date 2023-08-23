const qr = require('qr-image');
const fs = require('fs');

module.exports = (url) => {
    qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qrcode.png'));
    return qr_png;
}