const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
})

app.get('/ping', (req, res) => {
    res.status(200).send('pong');
})

app.get('/healthy', (req, res) => {
    res.status(200).send('healthy');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})