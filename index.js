const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'success', data: '/' });
});

app.get('/post', (req, res) => {
  res.status(200).json({ message: 'success', data: '/post' });
});

app.listen(80);
