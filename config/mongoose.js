const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lovekushmanjhi05:5xdMZ2Gf90JzFFet@cluster0.ak1kpth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', () => {
  console.log('-->Connected to Database :: MongoDB<--');
});

module.export = db;
