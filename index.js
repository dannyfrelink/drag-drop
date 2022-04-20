const express = require('express');
const app = express();
const PORT = 4141;
const htmlPath = `${__dirname}/public/html/`;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(`${htmlPath}index.html`);
});
app.get('/detail', (req, res) => {
    res.sendFile(`${htmlPath}detail.html`);
});

app.listen(PORT, () => {
    console.log(`Application started on port: http://localhost:${PORT}`);
});