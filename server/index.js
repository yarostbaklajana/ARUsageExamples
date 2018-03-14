const http = require('http');
const express = require('express');
const morgan = require('morgan');
const SERVER_PORT = 9001;
const router = require('./routes');
const app = express();

app.use(morgan('tiny'));

app.use('/api', router);

http.createServer(app).listen(SERVER_PORT, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Server started at port: ${SERVER_PORT}`)
});