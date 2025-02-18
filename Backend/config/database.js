const mongoose = require('mongoose');

// Connecting databse URL
mongoose.connect('mongodb+srv://theosrenatos:madhavfoodsdatabase@cluster0.dx0q0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { userNewUrlParser: true, useUnifiedTopology: true});

// Connecting to DataBase
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});
