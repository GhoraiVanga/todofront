const express = require('express');

const app = express();

app.use(express.static('./dist/Angular8JwtAuth'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/Angular8JwtAuth/'}),
);

app.listen(process.env.PORT || 8085);
