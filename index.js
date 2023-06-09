const express = require('express');

const bodyParser = require('body-parse');

const app = express();

const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader('Acces-Control-Allow-Origin', '*');
    res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Acces-Control-Allow-Headers', 'GContent-Type, Authorization');
    next();
});

app.listen(ports,() => console.log(`Listening on port ${ports}`))