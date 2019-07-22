const express = require('express');
const connectDB = require('./config/db');
const cacheControl = require('express-cache-controller');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();

// Init Middleware (Body Parser)
app.use(cacheControl());
app.use(cors());

app.use(express.json({
    extended: false
}))

app.get('/', (req, res) => res.send('API running'));

// Defining Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/post'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Backend server is listening on port ${PORT}`));