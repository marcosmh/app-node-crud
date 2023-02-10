const express = require('express');
const bodyParser = require('body-parser');


//create express app
const app = express();

//setup app server
const port = process.env.PORT = 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.get('/get', (req, res) => {
    res.send('Hello World [Node Js]');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});