const express = require('express'); // import frameworka
const app     = express();          // tworzę nową aplikację

// co sie stanie po wejściu na główny adres
app.get('/', function (req, res) {
    res.json(
        {'status': 'Success'}
    );
});

app.listen(8081, function () {
    console.log('Server started');
});
