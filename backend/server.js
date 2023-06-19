const express = require('express');

const app = express();

PORT = 5000;

app.get('/', (req, res) => {
  res.send(`API is running on port ${PORT}`);
});

app.listen(5000, console.log(`app is listening on port ${PORT}`));
