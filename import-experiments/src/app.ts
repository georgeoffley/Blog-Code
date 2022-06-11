import express from 'express';

const {three} = require('./PrimeNums');

//const {two} = require('./PrimeNums');

import { two } from './PrimeNums';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`Prime Numbers: ${two}, ${three}`);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});