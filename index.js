const express = require('express'); // import frameworka
const app     = express();          // tworzę nową aplikację

const path    = require('path');
const router  = express.Router();

const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'hcmcore',
    password: 'zaq1@WSX',
    database: 'hcmcore',
    port: '5432'
});

client.connect();

router.get('/query', function (req, response) {
    var newJSON = {};

    client.query(
        'select * from hcm_confprop',
        (err, res) => {
            newJSON = {
                err: err,
                res: res
        };

        client.end();
        response.json(newJSON);
    });
});

// co sie stanie po wejściu na główny adres
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/home', function (req, res) {
    res.json(
        {'status' : 'home'}
    )
});

app.use('/', router);
app.listen(8081, function () {
    console.log('Server started');
});
