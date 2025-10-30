require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/route');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO || 'mongodb://127.0.0.1:27017/userdb';

mongoose
  .connect(mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

app.use('/users', userRoute);

app.get('/', (req, res) => {
  res.send('User API running...');
});

app.listen(port, () => console.log(`App running  ${port}`));
