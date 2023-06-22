const express = require('express');
const chats = require('./data/data');
const dotenv = require('dotenv').config();
const colors = require('colors');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/chat', (req, res) => {
  res.send(chats);
});

app.get('/api/chat/:id', (req, res) => {
  ``;
  //   console.log(req.params.id);

  //   Finds the id of a single chat to display the data
  const singleChat = chats.find((chat) => chat._id === req.params.id);
  res.send(singleChat);
});

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`.cyan.underline.bold)
);
