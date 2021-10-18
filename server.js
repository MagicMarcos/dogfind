const express = require('express');
const app = express();
require('dotenv').config({ path: './config/.env' });
const PORT = process.env.PORT;
app.listen(PORT, console.log(`server running on ${PORT}`));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
	res.render('index.ejs');
});
app.get('/posts', (req, res) => {
	res.render('post.ejs');
});
app.get('/login', (req, res) => {
	res.render('post.ejs');
});
app.get('/signup', (req, res) => {
	res.render('post.ejs');
});
app.get('/profile', (req, res) => {
	res.render('post.ejs');
});
