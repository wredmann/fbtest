const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.set('port', (process.env.PORT || 8000));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Home
app.get('/', function (req, res) {
    res.send('Hello World!');
});

// Start the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'));
});

app.get('/mybot', function (req, res) {
    if (req.query['hub.verify_token'] === 'IHIS_IS_MY_VERIFICATION_TOKEN') {
        res.send('Wrong token');
    }
})