const express = require('express'); // import express module
const app = express(); // declare app as express app
const bodyParser = require('body-parser'); // import body parser, needed to handle client side data
const gallery = require('./routes/gallery.router.js'); // import gallery module 
const PORT = process.env.PORT || 5000; // declare PORT

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/gallery', gallery);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});