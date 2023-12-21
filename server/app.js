// server/app.js
const express = require('express');
const http = require('http');
const { format } = require('date-fns'); // Using date-fns for date formatting

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  const currentTime = format(new Date(), 'HH:mm:ss');
  res.send(`Server is running! Current time: ${currentTime}`);
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});