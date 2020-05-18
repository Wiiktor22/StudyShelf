const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/userdata', require('./routes/userData'));
app.use('/api/notes', require('./routes/notes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));