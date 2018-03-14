const http = require('http');
const express = require('express');
const morgan = require('morgan');
const SERVER_PORT = 9001;

const app = express();
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    return res.json({message: 'test'});
})

http.createServer(app).listen(SERVER_PORT, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Server started at port: ${SERVER_PORT}`)
});