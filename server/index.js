const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 4000; 

app.post('/convert', (req, res) => {
    res.status(201).send({message : 'Server is up and running.'})
})


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})