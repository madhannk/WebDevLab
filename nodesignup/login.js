const express = require('express');
const session = require('express-session');
const path = require('path');
const mysql = require('mysql');
const app = express();

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'madhan@4205',
  database: 'nodelogin'
});

// Middleware
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'signup.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'login.html')));

app.post('/auth', (req, res) => {
  const { username, email, password, confirmpassword } = req.body;
  if (username && email && password && confirmpassword && password === confirmpassword) {
    connection.query(
      'INSERT INTO accounts(username, password, email) VALUES(?,?,?)',
      [username, password, email],
      err => {
        if (err) return res.send('Error during signup!');
        req.session.signup = true;
        req.session.username = username;
        return res.redirect('/login');
      }
    );
  } else {
    res.send('Please provide valid details!');
  }
});

app.post('/auth1', (req, res) => {
  const { username, password } = req.body;
  if (username && password)
    connection.query(
      'SELECT * FROM accounts WHERE username=? AND password=?',
      [username, password],
      (err, results) => {
        if (err) return res.send('Error during login!');
        if (results.length > 0) {
          req.session.loggedin = true;
          req.session.username = username;
          return res.redirect('/home');
        }
        return res.send('Incorrect Username and/or Password!');
      }
    );
  else {
    res.send('Please enter Username and Password!');
  }
});

app.get('/home', (req, res) =>
  req.session.loggedin
    ? res.send(`Welcome ${req.session.username}!!!`)
    : res.send('Please login to view this page!')
);

app.listen(3000, () => console.log('Server running on port 3000'));
