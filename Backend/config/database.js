const mongoose = require('mongoose');

// Connecting databse URL
mongoose.connect('mongodb://localhost:27017/ecommerce', { userNewUrlParser: true, useUnifiedTopology: true});

// Connecting to DataBase
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});
