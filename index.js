// importing express 
const express = require('express');

// initializing express
const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.send('Response form Express')
});

app.get('/add', (req,res) => {
    res.send('Response from add');
});

app.get('/getall', (req,res) => {
    res.send('Get all the requests')
});

app.get('/update', (req,res) => {
    res.send('Update all the requests')
});




// starting the server 
app.listen(port , () => {console.log('express server started '); } );
