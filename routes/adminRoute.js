require('dotenv').config();
var express = require("express");
var router = express.Router();

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

router.get('/', (req, res) => {
  res.render('admin'); // Assuming your EJS file is named 'admin.ejs'
});


router.post('/login', (req, res) => {
    if (req.body.username === process.env.ADMIN_USERNAME && 
        req.body.password === process.env.ADMIN_PASSWORD) {
        res.redirect('/');
    } else {
        res.status(400).send("Incorrect username or password");
    }
});

module.exports = router;