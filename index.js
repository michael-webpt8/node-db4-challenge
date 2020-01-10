//const express = require('express');
const server = require('./server');


const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`\n *** server listening on http://${host}:${port} *** \n`)
})