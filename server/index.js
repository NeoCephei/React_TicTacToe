const PORT = 3005;
const express = require('express');
const cors = require('cors');

const router = require('./router');
const db = require('./models/index');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

(async () => {
  try {
    await db;
    app.listen(PORT,() => {
      console.log('Server running at port ', PORT);
    })
  } catch (error) {
    console.log('Error when launching server: ', error);
  }
})()