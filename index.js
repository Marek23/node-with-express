const express = require('express'); // import frameworka
const app     = express();          // tworzę nową aplikację

const path    = require('path');
const router  = express.Router();

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
