const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 4000;

const http = require('http');


app.post('/convert', (req, res) => {
    console.log(req.body.url);
})


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})