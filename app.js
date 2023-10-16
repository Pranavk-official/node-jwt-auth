const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./server/routes/authRoutes')

const app = express();

// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');

// database connection

const dbURI = 'mongodb+srv://pranavkcse:KiagGBD6JTxOf5Kn@cluster0.twouuza.mongodb.net/node-auth';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes)