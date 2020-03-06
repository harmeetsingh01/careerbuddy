const express = require("express");
const mongoose = require("mongoose");

const app = express();

// for parsing
app.use(express.json());

const cor = require('./routes/courses')

mongoose.connect('mongodb+srv://Harmeet:harryrocks@cluster0-dduqg.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology:true })

var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'))
db.once('open',() => console.log("Database connected"));

// app.get('/',(req,res) => {
//     res.status(200).json({'success': true})
// })

const port = process.env.PORT || 5000;

app.use('/courses/',cor)

app.listen(port,() => console.log(`Server started on ${port}`));