const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/db_todoList', { //DB!!
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('error', ()=>{console.log('Error when connecting')});
db.once('open', ()=>{console.log('DB Connected')});

module.exports = db;