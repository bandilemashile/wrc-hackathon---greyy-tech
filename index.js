'use strict';

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');

const app = express();
const server =  http.createServer(app);
const io = socketIO(server);

app.get('/', (req,res) => {

  res.send('public/index.html');
})

server.listen(3000, err => {
  if (err) {
  throw err
  }

console.log('server has started on port 3000');
})
