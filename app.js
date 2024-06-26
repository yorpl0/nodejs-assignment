// app.js

// Import required modules
const express = require('express');
const path = require('path');

// Create Express application
const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to handle 404 errors
app.use((req, res, next) => {
    res.status(404).render('error', { message: 'Page not found' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// app.js

// Temporary array to hold products (can be replaced with a database)
let products = [];

// Middleware to parse request body for form data
app.use(express.urlencoded({ extended: true }));

// GET request for rendering index.ejs
app.get('/', (req, res) => {
    res.render('index', { products });
});

// POST request to handle form submission
app.post('/add-product', (req, res) => {
    const { productName } = req.body;
    products.push(productName);
    res.redirect('/');
});

// Middleware to handle 404 errors
app.use((req, res, next) => {
    res.status(404).render('error', { message: 'Page not found' });
});
