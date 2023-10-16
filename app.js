require('dotenv').config()

const express = require('express');
const connectDB = require('./server/config/db')
const authRoutes = require('./server/routes/authRoutes')

const app = express();
const PORT = 3000 || process.env.PORT;

// DB connection
connectDB();

// middleware
app.use(express.static('public'));

// middleware to pass data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');


// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes)


app.listen(PORT, () => {
  console.log(`Listening on : http://localhost:${PORT}`);
})