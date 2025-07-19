const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', taskRoutes);

app.get('/', (req, res) => {
  res.send('Task Management API is running');
});

module.exports = app;