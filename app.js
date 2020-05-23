const express = require('express');
const connectDB = require('./config/db');

const tasks = require('./routes/tasks.js');

const app = express();

connectDB();

app.get('/', (req, res) => res.send('Hello, world!'));

app.use('/tasks', tasks)

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
