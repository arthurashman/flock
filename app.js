const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors')

const tasks = require('./routes/tasks');

const app = express();

connectDB();

app.use(cors({ origin: true, credentials: true}));

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello, world!'));

app.use('/tasks', tasks)

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
